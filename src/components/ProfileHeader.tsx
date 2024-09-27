/* eslint-disable react-native/no-inline-styles */
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './componentStyles/styles';


const ProfileHeader: React.FC = () => {
  const [umg, imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');
  const [name, namestate] = React.useState('');
  useFocusEffect(() => {
    async function getuser() {
      try {
        if (!(await GoogleSignin.isSignedIn())) {
          imgstate('https://i.stack.imgur.com/l60Hf.png');
          await AsyncStorage.getItem('user_id');
          let username = await AsyncStorage.getItem('user_name');
          if (username !== null) {
            username = '';
          }
          namestate(username);
          return;
        }
        const user = await GoogleSignin.getCurrentUser();
        imgstate(user.user.photo);
        namestate(user.user.name);
      } catch (err) {}
    }
    getuser();
  });

  return (
    <View
      style={styles.container}>
      <Image
        source={{
          uri: umg,
        }}
        style={styles.img}
      />
      <View style={styles.nameConatiner}>
        <Text
          style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.text}>
          {'View and edit profile'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
