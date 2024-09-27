/* eslint-disable radix */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */

import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {day_data} from '../../components/alarm/timeData';
import PushNotification, {Importance} from 'react-native-push-notification';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {TextInput} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from 'react-native-modal-datetime-picker'; //NOSONAR false positive
import globalDb from '../../repositories/database/globalDb';
import styles from './alarmStyles/ReminderStyles';
import Logger from '../../components/logger';
import { useRoute } from '@react-navigation/native';
var counter = 0;

const Reminder = ({ navigation}) => {
  const db = globalDb();

  useEffect(() => {
    db.transaction(txn => {
      Logger.loggerInfo('e');
      txn.executeSql(
        'SELECT * FROM `User_medicines` where user_id = ? AND status = ?',
        [id, 1],
        function (_tx, res) {
          Logger.loggerInfo('success');
          Logger.loggerInfo(res.rows.item(0));
          titlestate(res.rows.item(0).title);
          timearraystate(res.rows.item(0).time.split('-'));
        },
      );
    });
  }, []);

  const multiSliderValuesChange = values => {
    var curr_date = new Date();
    Logger.loggerInfo(curr_date);
    Logger.loggerInfo(curr_date.setDate(curr_date.getDate() + values[0]));

    Logger.loggerInfo(curr_date.getDate());
    end_datestate(curr_date);
    store_end_datestate(curr_date);
    setMultiSliderValue(values);
  };
 const route = useRoute();
 const id = route.params;
  Logger.loggerInfo(id);

  const [picker, pickerstate] = React.useState(false);
  const [selectedItems, _slectedstate] = React.useState([]);
  const [selecteddaysItems, slecteddaysstate] = React.useState([]);
  const [load, loadstate] = React.useState(false);
  const [start_date, start_datestate] = React.useState(new Date());
  const [end_date, end_datestate] = React.useState(new Date());
  const [store_start_date, _store_start_datestate] = React.useState<any>(
    new Date(),
  );
  const [store_end_date, store_end_datestate] = React.useState(new Date());
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [title, titlestate] = React.useState('');
  const [time_picker_mode, time_picker_mode_state] = React.useState(false);
  const [timeings, timestate] = React.useState<any[]>([]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([0]);
  const [timearray, timearraystate] = React.useState<any[]>([]);

  const onSelecteddaysItemsChange = selectedi => {
    slecteddaysstate(selectedi);
  };
  const hideDatePicker = () => {
    pickerstate(false);
  };
  const titlechange = txt => {
    titlestate(txt);
  };
  const hideDatePickerfortime = () => {
    time_picker_mode_state(false);
  };

  const setreminderwithselecteddate = (titl: any) => {
    counter = 0;
    var now = new Date();

    now.setDate(start_date.getDate());

    //Logger.loggerInfo(now.getDate(), now.getHours(), now.getTime());
    Logger.loggerInfo(new Date(Date.now()));
    Logger.loggerInfo(now);
    let sample_date = new Date(start_date);
    var weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var set = new Set<string>(selecteddaysItems);
    if (check1) {
      timeings.forEach((timee: any) => {
        counter += 1;
        let timm_array = timee.split(':');

        now.setHours(timm_array[0]);
        now.setMinutes(timm_array[1]);

        PushNotification.localNotificationSchedule({
          title: titl,
          message: 'Time to eat your medicine',
          subText: 'Mark as read if you have taken',
          id: num.toString(),
          color: '#3743ab',
          showWhen: true,
          tag: id.toString(),
          visibility: 'public',
          usesChronometer: true,
          when: now.getHours() + '' + now.getMinutes(),
          date: new Date(now.getTime()),
          allowWhileIdle: true,
          vibrate: true,
          playSound: true,
          invokeApp: false,
          soundName: 'android.resource://com.project/raw/my_sound.mp3',
          importance: Importance.HIGH,
          repeatType: 'day',
          smallIcon: 'android.resource://com.project/raw/icon.png',
          actions: ['Open app to mark', 'Skip'],
          repeatTime: 3,
        });
      });
      return;
    }
    while (sample_date <= end_date) {
      now.setDate(sample_date.getDate());

      now.setMonth(sample_date.getMonth());
      if (set.has(weeks[now.getDay()])) {
        timeings.forEach((timee: any) => {
          counter += 1;
          let timm_array = timee.split(':');

          now.setHours(timm_array[0]);
          now.setMinutes(timm_array[1]);
         // Logger.loggerInfo(now, ' ', now.getHours(), ' ', weeks[now.getDay()]);

          let num1 = Math.floor(Math.random() * 90000) + 10000;

          PushNotification.createChannel(
            {
              channelId: num1.toString(),
              channelName: titl + 'Med channel',
              channelDescription: 'A channel to categorise your notifications',
              playSound: false,
              soundName: 'default',
              importance: Importance.HIGH,
              vibrate: true,
            },
            created => Logger.loggerInfo(`createChannel returned '${created}'`),
          );
          PushNotification.localNotificationSchedule({
            title: titl,
            message: 'Time to eat your medicine',
            subText: 'Mark as read if you have taken',
            id: num1.toString(),
            color: '#3743ab',
            showWhen: true,
            tag: id.toString(),
            visibility: 'public',
            usesChronometer: true,
            when: now.getHours() + '' + now.getMinutes(),
            date: new Date(now.getTime()),
            allowWhileIdle: true,
            vibrate: true,
            playSound: true,
            invokeApp: false,
            soundName: 'android.resource://com.project/raw/my_sound.mp3',
            importance: Importance.HIGH,

            smallIcon: 'ic_launcher',
            largeIcon: 'ic_launcher',
            actions: ['Open app to mark', 'Skip'],
            repeatTime: 3,
          });
        });
      }

      sample_date.setDate(sample_date.getDate() + 1);
    }
  };

  const handleConfirm = date => {
    Logger.loggerInfo(date);

    pickerstate(false);

    start_datestate(date);
    store_start_date(date);
  };

  const handleConfirmfortime = date => {
    Logger.loggerInfo('A time has been picked');

    if (date.getHours() > 11) {
      Logger.loggerInfo(timeings);
      timearray.push(date.getHours() + ':' + date.getMinutes() + ' PM');
      timeings.push(date.getHours() + ':' + date.getMinutes());
      timestate(timeings);
      Logger.loggerInfo(timeings);
    } else {
      timearray.push(date.getHours() + ':' + date.getMinutes() + ' AM');

      timeings.push(date.getHours() + ':' + date.getMinutes());
      timestate(timeings);
      Logger.loggerInfo(timeings);
    }
    hideDatePickerfortime();
  };

  const savereminder = () => {
    //NOSONAR
    if (
      multiSliderValue[0] === 0 ||
      title.length === 0 ||
      timearray.length === 0
    ) {
      Alert.alert('Make sure you have valid reminder', ' ', [
        {
          text: 'OK',
          onPress: () => undefined,
        },
      ]);
      return;
    }
    loadstate(true);
    let time = '';
    let days = '';
    for (let i = 0; i < timearray.length; i++) {
      let mtime = timearray[i].split(' ')[0].split(':')[0];
      if (parseInt(timearray[i].split(' ')[0].split(':')[1]) < 10) {
        mtime += ':0' + timearray[i].split(' ')[0].split(':')[1];
      } else {
        mtime += ':' + timearray[i].split(' ')[0].split(':')[1];
      }
      if (i === timearray.length - 1) {
        time += mtime + ' ' + timearray[i].split(' ')[1];
      } else {
        time += mtime + ' ' + timearray[i].split(' ')[1] + '-';
      }
    }
    if (check2) {
      for (let i = 0; i < selecteddaysItems.length; i++) {
        if (i == selecteddaysItems.length - 1) {
          days += selecteddaysItems[i];
        } else {
          days += selecteddaysItems[i] + ':';
        }
      }
     // Logger.loggerInfo({time, days});
    } else if (check1) {
      days += 'Everyday';
      slecteddaysstate(['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']);
    }
    setreminderwithselecteddate(title);

    //Logger.loggerInfo('date', store_end_date.toISOString(), ' total_meds ' + counter);
    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER, total_med_reminders INTEGER , current_count INTEGER)',
        [],
      );

      txn.executeSql(
        'UPDATE User_medicines SET title=? , time=? , days=? , start_date =? , end_date=? , status=? , sync=? , total_med_reminders = ? , current_count = ?  where user_id = ' +
          id,
        [
          title,
          time,
          days,
          store_start_date.toISOString(),
          store_end_date.toISOString(),
          1,
          0,
          counter,
          0,
        ],
      );

      txn.executeSql('SELECT * FROM `User_medicines`', [], function (_tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          Logger.loggerInfo(res.rows.item(i));
        }

        loadstate(false);
        navigation.pop(1);
      });
    });

  //  Logger.loggerInfo(selectedItems, selecteddaysItems);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.top}>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => {
              Logger.loggerInfo('p');
              Logger.loggerInfo(picker);
              pickerstate(true);
            }}
            style={styles.containerTouch}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText} testID='startDateText'>Start Date</Text>
              <Text style={styles.dateText1}>
                {start_date.toISOString().split('T')[0]}
              </Text>
              <Text style={styles.dateText} testID='endDateText'>End Date</Text>

              <Text style={styles.dateText1}>
                {end_date.toISOString().split('T')[0]}
              </Text>
            </View>

            <Icon
              name="caret-down"
              style={styles.downIcon}
              color=""
              size={16}></Icon>
          </TouchableOpacity>
          <Divider></Divider>
          <DateTimePicker
            isVisible={picker}
            mode="date"
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={time_picker_mode}
            mode="time"
            onConfirm={handleConfirmfortime}
            onCancel={hideDatePickerfortime}
          />
          <Text style={styles.title} testID='titleText'>Add Title</Text>
          <TextInput
            selectionColor="#3743ab"
            outlineColor="#3743ab"
            activeUnderlineColor="#3743ab"
            placeholder="Title for reminder"
            label="Title"
            style={styles.titleText}
            mode="outlined"
            value={title}
            onChangeText={titlechange}></TextInput>

          <Divider></Divider>
          <View>
            <TouchableOpacity
              onPress={() => {
                time_picker_mode_state(true);
              }}
              style={styles.timeTouch}>
              <View style={styles.timeContainer}>
                <Text style={styles.selectTime} testID='selectTimeText'>Select Time</Text>
              </View>

              <Icon
                name="caret-down"
                style={styles.downIcon}
                color=""
                size={16}></Icon>
            </TouchableOpacity>
            {timearray.map((item, index) => {
              return (
                <View key={index} style={styles.timeTextConatiner}>
                  <Text key={item} style={styles.timeText}>
                    {item}
                  </Text>
                  <TouchableOpacity
                    key={item + '' + index}
                    onPress={() => {
                      Logger.loggerInfo(timearray.splice(timearray.indexOf(item), 1));
                      timearraystate(
                        timearray.splice(timearray.indexOf(item), 1),
                      );
                    }}>
                    <EntypoIcon color="red" name="cross" size={20}></EntypoIcon>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Divider></Divider>
          <View style={styles.days}>
            <TouchableOpacity>
              <Text style={styles.selectDays}>Select Days</Text>
            </TouchableOpacity>
            <CheckBox
              style={styles.days}
              onClick={() => {
                setCheck1(!check1);
                setCheck2(false);
              }}
              isChecked={check1}
              checkBoxColor="#3743ab"
              leftText={'Everyday'}
            />
            <CheckBox
              style={styles.days}
              onClick={() => {
                setCheck2(!check2);
                setCheck1(false);
              }}
              isChecked={check2}
              checkBoxColor="#3743ab"
              leftText={'Selected days'}
            />

            {check2 && (
              <SectionedMultiSelect
                IconRenderer={Icon2}
                items={day_data}
                uniqueKey="id"
                hideSearch={true}
                subKey="children"
                selectText="Choose days"
                showDropDowns={true}
                expandDropDowns={true}
                styles={{
                  listContainer: {height: 400},
                  container: {maxHeight: 400, marginTop: 200, padding: 20},
                  backdrop: {height: 400},
                  modalWrapper: {height: 400},
                }}
                readOnlyHeadings={true}
                onSelectedItemsChange={onSelecteddaysItemsChange}
                selectedItems={selecteddaysItems}></SectionedMultiSelect>
            )}
          </View>
          <Divider></Divider>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>
              {'Duration : ' + multiSliderValue + ' days'}
            </Text>
            <View style={styles.multiSlider}>
              <MultiSlider
                values={[multiSliderValue[0]]}
                sliderLength={320}
                onValuesChange={multiSliderValuesChange}
                max={100}
                step={1}
                customMarker={() => (
                  <Icon color="#3743ab" name="circle" size={16}></Icon>
                )}
              />
            </View>
          </View>
          <Button
            loading={load}
            title="Save reminder"
            onPress={savereminder}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Reminder;
