import {Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import SQLite from 'react-native-sqlite-storage';
import globalDb from '../../repositories/database/globalDb';
import {useRoute} from '@react-navigation/native';
var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
import Toast from 'react-native-toast-message';
import styles from './adherenceStyles/TodayPerformanceStyles';
import {Box} from '../../components/organisms/medicineTime';

var cc = 0;

const TodayPerformance = ({}) => {
 // SQLite.enablePromise(true);
 const db = globalDb();
  const route = useRoute();
  const user_id = route.params;
  const [Timings, setTime] = useState([]);

  const updatetimes = async (time: any) => {
    const index = Timings.indexOf(time);

    if (index > -1) {
      Timings.splice(index, 1);
    }
    let new_timing = '';
    let len = Timings.length;
    for (let i = 0; i < len; i++) {
      if (i === len - 1) {
        new_timing += Timings[i];
      } else {
        new_timing += Timings[i] + '-';
      }
    }
    let tody_date = new Date();
    let td_da =
      tody_date.getDate() +
      '-' +
      (tody_date.getMonth() + 1) +
      '-' +
      tody_date.getFullYear();
    cc += 1;
    await db.transaction(async function (txxn) {
      txxn.executeSql(
        'UPDATE reminder_day SET timings = ? WHERE date = ? AND med_id = ?',
        [new_timing, td_da, user_id],
      );

      await txxn.executeSql(
        'UPDATE User_medicines SET current_count = ? WHERE user_id = ?',
        [cc, user_id],
      );
      Toast.show({
        type: 'info',
        text1: 'Updated successfully',
        position: 'bottom',
      });
    });
  };

  React.useEffect(() => {
    db.transaction(async function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );
      txn.executeSql(
        'SELECT * FROM `User_medicines` where user_id = ?',
        [user_id],
        function (_tx: any, res: any) {
          cc = res.rows.item(0).current_count;
          let arr = res.rows.item(0).days.split(':');
          let set = new Set(arr);
          var today = new Date(res.rows.item(0).end_date);
          var tody_date = new Date();
          let td_da =
            tody_date.getDate() +
            '-' +
            (tody_date.getMonth() + 1) +
            '-' +
            tody_date.getFullYear();
          if (set.has(weeks[tody_date.getDay()]) && tody_date <= today) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS reminder_day(rem_id INTEGER PRIMARY KEY NOT NULL , date TEXT , timings TEXT, med_id INTEGER)',
              [],
            );
            txn.executeSql(
              'SELECT * FROM reminder_day where date = ? AND med_id = ?',
              [td_da, user_id],
              function (_txx, resp) {
                if (resp.rows.length === 0) {
                  let remId = Math.floor(10000000 + Math.random() * 90000000);

                  txn.executeSql(
                    'INSERT INTO reminder_day (rem_id,date,timings,med_id) VALUES (?,?,?,?)',
                    [remId, td_da, res.rows.item(0).time, user_id],
                  );

                  setTime(res.rows.item(0).time.split('-'));

                  txn.executeSql(
                    'SELECT * FROM reminder_day where date = ? AND med_id = ?',
                    [td_da, user_id],
                    function (_txpp, respp) {
                      setTime(respp.rows.item(0).timings.split('-'));
                    },
                  );
                } else {
                  txn.executeSql(
                    'SELECT * FROM reminder_day where date = ? AND med_id = ?',
                    [td_da, user_id],
                    function (_txo, respp) {
                      setTime(respp.rows.item(0).timings.split('-'));
                    },
                  );
                }
              },
            );
          } else {
            setTime(['']);
          }
        },
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Toast visibilityTime={1000} />
      <View style={styles.container1}>
        <Text style={styles.container1Text}>Timings</Text>
      </View>
      {Timings.length !== 0 && Timings[0].length === 0 ? (
        <View style={styles.container2}>
          <Image
            source={require('../../../assests/images/noremtoday.png')}
            style={styles.container2Image}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={Timings}
            renderItem={({item}) => {
              return <Box time={item} updatetimes={updatetimes} />;
            }}
          />
        </View>
      )}
    </View>
  );
};
export default TodayPerformance;
