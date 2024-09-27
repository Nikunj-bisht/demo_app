/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useReducer} from 'react';
import {Avatar, ListItem} from 'react-native-elements';
import {Card} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect} from '@react-navigation/native';
import globalDb from '../repositories/database/globalDb';
import styles from './screenStyles/AddMedicineStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Logger from '../components/logger';

const db = globalDb();

interface Props {
  navigation: any;
}

let Reducerfun = (state: any, action: any) => {
  return {...state, data: action.payload};
};

let initialVal = {data: []};
const Addmedicine = ({navigation}: Props) => {
  const [medicines, characterstate] = useReducer(Reducerfun, initialVal);
  useFocusEffect(
    React.useCallback(() => {
      fetch_meds();
      return () => {
        /* do nothing */
      };
    }, []),
  );

  const checkformeds = async () => {
    return new Promise(function (resolve) {
      var meds_array: any[] = [];

      db.transaction(async function (txn) {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER, total_med_reminders INTEGER , current_count INTEGER)',
          [],
        );

        txn.executeSql(
          'SELECT * FROM `User_medicines`',
          [],
          function (_tx: any, res: any) {
            for (let i = 0; i < res.rows.length; ++i) {
              meds_array.push(res.rows.item(i));
            }

            resolve(meds_array);
          },
        );
      });
    });
  };

  const fetch_meds = async () => {
    const meds_arr: any = await checkformeds();
    meds_arr.length === 0
      ? characterstate({type: 'empty', payload: []})
      : characterstate({type: 'data', payload: meds_arr});
  };

  const deleteitem = async (id: number) => {
   Logger.loggerInfo(id);
    Logger.loggerWarn('del');
    let med_del: any[] = [];
    db.transaction(function (txn: any) {
      txn.executeSql('DELETE FROM `User_medicines`  where user_id = ' + id);
      txn.executeSql(
        'SELECT * FROM `User_medicines`',
        [],
        function (_tx: any, res: any) {
          for (let i = 0; i < res.rows.length; ++i) {
            med_del.push(res.rows.item(i));
          }

         Logger.loggerInfo(med_del);
          med_del.length === 0
            ? characterstate({type: 'empty', payload: []})
            : characterstate({type: 'data', payload: med_del});
        },
      );
    });
  };

  const renderitem: React.FC = ({item, index}: any) => {
    return (
      <Animatable.View animation="zoomInUp" duration={400} delay={index * 180}>
        <Card style={styles.card}>
          <View style={styles.listView}>
            <ListItem style={styles.list}>
              <ListItem.Content>
                <View style={styles.avatarView}>
                  <Avatar
                    rounded
                    size={50}
                    source={require('../../assests/images/meddis.png')}
                  />
                  <View style={styles.medNameView}>
                    <ListItem.Title style={styles.medName}>
                      {item.medicine_name}
                    </ListItem.Title>
                    <ListItem.Subtitle>{item.medicine_des}</ListItem.Subtitle>
                  </View>
                </View>
              </ListItem.Content>

              <TouchableOpacity
               testID='addRem'
                style={styles.rem}
                onPress={() =>
                  navigation.navigate('Add Reminder', {id: item.user_id})
                }>
                <AntIcon
                  testID='remIcon'
                  name="clockcircle"
                  color={item.status === 0 ? '#3743ab' : '#4dd0e1'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity
                testID='deleteMed'
                onPress={() => {
                  Alert.alert('Delete it!', 'Sure you want delete it', [
                    {
                      text: 'Delete',
                      onPress: () => deleteitem(item.user_id),
                    },
                    {
                      text: 'Cancel',
                    },
                  ]);
                }}>
                <Icon testID='delIcon' name="trash" color="#3743ab" size={24} />
              </TouchableOpacity>
            </ListItem>
          </View>
        </Card>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      {medicines.data.length === 0 ? (
        <View style={styles.imgView}>
          <Image
            source={require('../../assests/images/nomeds.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
      ) : (
        <FlatList
          data={medicines.data}
          renderItem={renderitem}
          initialNumToRender={10}
          numColumns={1}
        />
      )}

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.addButtonTouch}
          onPress={() =>
            navigation.getParent().navigate('Add Medicine', {
              id: '1234',
            })
          } testID='addMedButton'>
          <LottieView
            source={require('../../assests/animate/addicon.json')}
            autoPlay
            loop
            speed={2}
            style={styles.addLottie}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addmedicine;
