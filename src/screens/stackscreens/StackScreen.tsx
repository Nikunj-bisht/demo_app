/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/self-closing-comp */
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import AdherenceHistory from '../adherence/AdherenceHistory';
import CameraScreen from '../adherence/ClickSendImage';
import SendImageToCaretaker from '../adherence/SendImageToCaretaker';
import TodayPerformance from '../adherence/TodayPerformance';
import Reminder from '../alarm/Reminder';
import Searchcaretaker from '../caretaker/SearchCaretaker';
import Login from '../login/GoogleOauth';
import Loginscreen from '../login/LoginScreen';
import Profile from '../profile/Profile';
import About from '../AboutApp';
import MedicineImages from '../patient/MedicineImages';
import OnboardingScreen from '../OnboardingScreen';
import ViewProfile from '../patient/PatientProfile';
import PatientReport from '../patient/PatientReport';
import DrawerNavigator from '../../navigation/drawerNavigator';
import UserMed from '../UserMed';

const Stack = createStackNavigator();

const Stackscreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen
        name="Drawer"
        options={{headerShown: false}}
        component={DrawerNavigator}></Stack.Screen>
      <Stack.Screen
        name="Add Medicine"
        options={{
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white', fontSize: 20},
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        component={UserMed}></Stack.Screen>
      <Stack.Screen name="Sign-up" component={Login}></Stack.Screen>
      <Stack.Screen
        name="Profile"
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
          headerTitleStyle: {color: 'white', fontSize: 20},
        }}
        component={Profile}></Stack.Screen>
      <Stack.Screen
        name="Search Caretaker"
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}
        component={Searchcaretaker}></Stack.Screen>

      <Stack.Screen
        name="Add Reminder"
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}
        component={Reminder}
        options={{
          headerTitleStyle: {color: 'black', fontSize: 20},
        }}></Stack.Screen>
      {/* <Stack.Screen
        name="Events"
        options={{headerTitleStyle: {color: 'white', fontSize: 20}}}
        component={Addevent}></Stack.Screen> */}
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={() => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen name="Login" component={Loginscreen}></Stack.Screen>
      <Stack.Screen
        name="Sentocaretaker"
        component={SendImageToCaretaker}
        options={() => ({
          title: 'Send Image',
        })}></Stack.Screen>
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({
          title: 'About',
        })}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Patient Profile"
        component={ViewProfile}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Today Performance"
        component={TodayPerformance}></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'black'}}
        name="Adherence History"
        component={AdherenceHistory}></Stack.Screen>
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        name="Patient report"
        component={PatientReport}></Stack.Screen>
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#3743ab'},
        }}
        name="Images"
        component={MedicineImages}></Stack.Screen>
        
    </Stack.Navigator>
  );
};

export default Stackscreen;
