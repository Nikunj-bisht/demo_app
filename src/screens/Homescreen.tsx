/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

import {Animated, StatusBar, StyleSheet, View} from 'react-native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import Medicineadherence from './Medicineadherence';
import Addmedicine from '../Addmedicine';
import Profile from '../profile/Profile';

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  },[]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3743ab" />

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {height: 60},
          tabBarInactiveTintColor: '#555',
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: '#e3f2fd',

          headerRight: () => (
            <FontAwesomeIcon
              color="black"
              size={40}
              icon={faCamera as IconProp}></FontAwesomeIcon>
          ),
          tabBarActiveTintColor: '#bbdefb',
          tabBarLabelStyle: {
            fontSize: 16,
            color: 'black',
          },
        })}>
        <Tab.Screen
          name="Report"
          key={1}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={{width: 60, height: 60}}
                speed={0.8}
                source={require('../../assests/animate/heart.json')}
                progress={progress}

              />
            ),
          }}
          component={Medicineadherence}
        />
        <Tab.Screen
          name="Medicine"
          key={2}
          options={{
            headerShown: false,
            headerRight: () => (
              <FontAwesomeIcon
                color="black"
                size={40}
                icon={faCamera as IconProp}></FontAwesomeIcon>
            ),
            tabBarIcon: () => (
              <LottieView
                style={{width: 40, height: 40}}
                source={require('../../assests/animate/med2.json')}
                progress={progress}

              />
            ),
          }}
          component={Addmedicine}
        />
        {/* <Tab.Screen name="Events" component={Doctercomp} options={{headerRight:()=>(<Button style={{width:120}} iconRight={()=><FontAwesomeIcon color="white" size={10} icon={faArrowRight}></FontAwesomeIcon>} buttonStyle={{backgroundColor:'#3743ab'}}
      onPress={()=>navigation.navigate('Events')} title="Add event"></Button>),tabBarIcon:()=>(<LottieView style={{width:40,height:40}}
     source={require('../../assests/animate/calen.json')} autoPlay loop>
   </LottieView>)}}></Tab.Screen> */}

        <Tab.Screen
          name="Profile"
          key={2}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <LottieView
                style={{width: 50, height: 50}}
                source={require('../../assests/animate/profile.json')}
                progress={progress}
              />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
container:{
  backgroundColor: 'white', 
  height: '100%'
}
});
