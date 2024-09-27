/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import Addcaretaker from './AddCaretaker';
import React from 'react';
import CaretakerReq from './CaretakerReq';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import { Caretaker_nurse, Userfriend } from '../../components/caretaker/allIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './caretakerStyles/CaretakerComStyles';


export default function Caretakercomp({navigation}) {
  const [index, setIndex] = React.useState(0);
  useFocusEffect(() => {
    async function checkforlog() {
      const checkforlogin = await AsyncStorage.getItem('user_id');

      if (checkforlogin === null) {
        Alert.alert(
          'Sign in first to use this feature',
          'Click ok to proceed',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
            {
              text: 'Cancel',
              onPress: () => {
                navigation.navigate('Home');
              },
            },
          ],
        );
      }
    }

    checkforlog();
  });

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.tabIndicator}
        style={styles.tab}
        variant="primary">
        <Tab.Item
          title="Caretakers"
          containerStyle={styles.tabItemContainer}
          titleStyle={styles.tabItemTitle}
          icon={Caretaker_nurse()}
        />
        <Tab.Item
          title="Caretaker request"
          titleStyle={styles.tabItemTitle}
          containerStyle={styles.tabItemContainer}
          icon={Userfriend()}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabItem}>
          <Addcaretaker navigation={navigation}></Addcaretaker>
        </TabView.Item>
        <TabView.Item style={styles.tabItem}>
          <CaretakerReq></CaretakerReq>
        </TabView.Item>
      </TabView>
    </>
  );
}
