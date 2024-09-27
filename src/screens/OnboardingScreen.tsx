/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import styles from './screenStyles/OnboardingStyes';

const OnboardingScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Drawer');
  }, 500);
  return (
    <View
      style={styles.container}>
      <Image
        source={require('../../assests/images/Medstick_1.png')}
        style={styles.img}
        resizeMode="contain"></Image>
    </View>
  );
};

export default OnboardingScreen;
