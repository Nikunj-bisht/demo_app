/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';

import Toast from 'react-native-toast-message'

import ProgressCircle from 'react-native-progress-circle';
import {Divider} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {API_URL} from '../../repositories/var';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as Animatable from 'react-native-animatable';
import globalDb from '../../repositories/database/globalDb';
import AdherencePercentage from '../../components/adherence/adherencePercentage';

let today = new Date();
const Medicineadherence = ({navigation}) => {
  const [reminderdata, reminderdatastate] = React.useState([]);
  const [sync, syncstate] = React.useState(false);
  const [totalpercent, totalpercentstate] = React.useState(0);

  const Reminder = ({item}) => {
    let currdate = new Date();
    let click = currdate >= new Date(item.end_date);
    const [percentage, setpercentage] = React.useState(0);
    AdherencePercentage(
      item.start_date,
      item.days,
      item.time,
      item.current_count,
      item.medicine_name,
    ).then(per => setpercentage(per));
    return (
      <>
        {item.status === 1 ? (
          <View style={{}}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => {
                if (click) {
                  Alert.alert('Reminder duration over', '', [
                    {
                      text: 'Ok',
                      onPress: () => undefined,
                    },
                  ]);
                } else {
                  navigation.navigate('Today Performance', {
                    user_id: item.user_id,
                  });
                }
              }}>
              <View style={{flexDirection: 'column', margin: 10, width: '60%'}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    marginBottom: 7,
                    fontSize: 16,
                  }}>
                  {item.medicine_name}
                </Text>
                <Text
                  style={{marginBottom: 5, color: 'grey', fontWeight: '600'}}>
                  {item.medicine_des}
                </Text>
                <View style={{flexDirection: 'row', width: '50%'}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    Days -{' '}
                  </Text>
                  <Text style={{color: 'grey'}}>
                    {item.days.split(':').map((mday: any) => {
                      return <Text key={mday}>{mday + ', '}</Text>;
                    })}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', width: '60%', marginTop: 5}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    Timings -{' '}
                  </Text>
                  <Text style={{color: 'grey'}}>
                    {item.time.split('-').map((mtime: any) => {
                      return <Text key={mtime}>{mtime + ', '}</Text>;
                    })}
                  </Text>
                </View>
                <View style={{marginTop: 7, flexDirection: 'row'}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    {'End Date - '}
                  </Text>
                  <Text>{new Date(item.end_date).toDateString()}</Text>
                </View>
              </View>
              <View style={{padding: 30}}>
                <TouchableOpacity onPress={() => {/* do nothing */}}>
                  <ProgressCircle
                    percent={percentage}
                    radius={26}
                    borderWidth={3}
                    color="#00bcd4"
                    shadowColor="#999"
                    bgColor="#ffff">
                    <Text style={{fontSize: 15, color: '#00bcd4'}}>
                      {percentage + '%'}
                    </Text>
                  </ProgressCircle>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <Divider width={1} />
          </View>
        ) : (
          <></>
        )}
      </>
    );
  };

  async function fetchallreminders() {
    const reminder_array = [];
    return new Promise(resolve => {
      const db = globalDb();
      db.transaction(async function (txn) {
        await txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
          [],
        );

        await txn.executeSql(
          'SELECT * FROM `User_medicines`',
          [],
          function (_tx, res) {
            let tcurrenttaken = 0;
            let ttotaltaken = 0;

            for (let i = 0; i < res.rows.length; ++i) {
              let rowItem = res.rows.item(i);
              tcurrenttaken += rowItem.current_count;
              ttotaltaken += rowItem.total_med_reminders;
              res.rows.item(i).status === 1
                ? reminder_array.push(rowItem)
                : null;                      //NOSONAR false positive
            }

            if (tcurrenttaken === 0 && ttotaltaken === 0) {
              totalpercentstate(0);
            } else {
              totalpercentstate(
                Math.round((tcurrenttaken / ttotaltaken) * 100),
              );
            }

            reminderdatastate(reminder_array);
            resolve(reminder_array);
          },
        );
      });
    });
  }

  async function fetchallremindersandsync() {
    if (await GoogleSignin.isSignedIn()) {
      let remdata: any = await fetchallreminders();

      syncstate(true);
      const filtered_array = remdata
        .filter(reminder_item => reminder_item.status === 1)
        .map(reminder_item => {
          let obj = {
            medicineName: reminder_item.medicine_name,
            medicineDes: reminder_item.medicine_des,
            currentCount: reminder_item.current_count,
            totalMedReminders: reminder_item.total_med_reminders,
            title: reminder_item.title,
            startDate: reminder_item.start_date,
            status: reminder_item.status,
            time: reminder_item.time,
            days: reminder_item.days,
            endDate: reminder_item.end_date,
            userId: reminder_item.user_id,
          };
          return obj;
        });

      let user_id = await AsyncStorage.getItem('user_id');
      let url: any = new URL(`${API_URL}/api/v1/medicines/sync`);
      url.searchParams.append('userId', user_id);
      let jwt = await AsyncStorage.getItem('jwt');
      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(filtered_array),
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        })
          .then(response => {
            if (response.status === 200) {
              Toast.show({
                type: 'success',
                text1: 'Medicine Synced',
              });
            } else if (response.status === 500 || response.status === 400) {
              Toast.show({
                type: 'error',
                text1: 'Unable to sync',
              });
            } else if (response.status === 403 || response.status === 401) {
              Toast.show({
                type: 'info',
                text1: 'Unable to sync',
              });
            }
          })
          .catch(() => {
            Toast.show({
              type: 'info',
              text1: 'Unable to sync',
            });
          });
      } catch (err) {
        Toast.show({
          type: 'info',
          text1: 'Unable to sync',
        });
      }
      syncstate(false);
    }
  }

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchallreminders().then(() => {
  //       fetchallremindersandsync();
  //     });

  //     return () => {
  //      /* do nothing */
  //     };
  //   }, []),
  // );

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
      }}>
      {sync ? (
        <Animatable.View animation="slideInDown" duration={200}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              backgroundColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '800', color: 'white'}}>
              Syncing Data
            </Text>
            <Progress.CircleSnail
              spinDuration={400}
              size={30}
              color={['white']}
            />
          </View>
        </Animatable.View>
      ) : (
        <></>
      )}
      <TouchableOpacity
        onPress={() => {
          reminderdata.length === 0
            ? Alert.alert('No reminders set')
            : navigation.navigate('Adherence History');
        }}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={{paddingTop: 15, paddingLeft: 15, marginLeft: 18}}>
              <ProgressCircle
                percent={totalpercent}
                radius={26}
                borderWidth={3}
                color="#00bcd4"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{fontSize: 15, color: '#4dd0e1'}}>
                  {totalpercent + '%'}
                </Text>
              </ProgressCircle>
            </View>
            <View
              style={{
                flexDirection: 'column',
                paddingLeft: 30,
                paddingTop: 15,
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                Overall Performance Till Date
              </Text>
              <Text>You have some active reminders.</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', paddingBottom: 10}}>
            <Text style={{color: '#4dd0e1', fontWeight: '700'}}>
              CHECK PERFORMANCE
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          padding: 12,
          backgroundColor: 'lightgrey',
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: '600'}}>Reminders</Text>
      </View>

      <FlatList
        data={reminderdata}
        renderItem={({item, index}) => {
          if (item.status === 1) {
            return <Reminder item={item} index={index}></Reminder>;
          }
        }}></FlatList>
      {reminderdata.length === 0 && (
        <View style={{alignSelf: 'center'}}>
          <Image
            source={require('../../../assests/images/noreminders.png')}
            style={{width: 250}}
            resizeMode="contain"></Image>
        </View>
      )}
      <View
        style={{right: 10, left: 10, position: 'absolute', bottom: 10}}></View>
    </View>
  );
};
export default Medicineadherence;
