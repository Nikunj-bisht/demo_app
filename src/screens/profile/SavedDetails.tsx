/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './profileStyles/ProfileStyles';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome5';
import OctIcon from 'react-native-vector-icons/Octicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';

const SavedDetails = () => {
  const [bio, biostate] = React.useState('');
  const [contact, contactstate] = React.useState('');
  const [age, agestate] = React.useState('');
  const [weight, weightstate] = React.useState('');
  const [gender, genderstate] = React.useState('');
  const [ms, msstate] = React.useState('');
  const [blood, bloodstate] = React.useState('');

  useFocusEffect(() => {
    async function getuserdetail() {
      let sbio = await AsyncStorage.getItem('bio');
      let scontact = await AsyncStorage.getItem('contact');
      let sage = await AsyncStorage.getItem('age');
      let sweight = await AsyncStorage.getItem('weight');
      let sgender = await AsyncStorage.getItem('gender');
      let maritalstatus = await AsyncStorage.getItem('maritalstatus');
      let sblood = await AsyncStorage.getItem('bloodgroup');

      biostate(sbio);
      contactstate(scontact);
      agestate(sage);
      weightstate(sweight);
      genderstate(sgender);
      msstate(maritalstatus);
      bloodstate(sblood);
    }

    getuserdetail();
  });

  return (
    <View style={styles.sd}>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <Icon size={18} name="user" color="#3743ab"></Icon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{bio}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <Icon size={18} name="phone-alt" color="#3743ab"></Icon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{contact}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <OctIcon size={18} name="number" color="#3743ab"></OctIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{age + ' yrs'}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <Icon size={18} name="weight" color="#3743ab"></Icon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{weight + ' kg'}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <IonIcon size={18} name="male-female" color="#3743ab"></IonIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{gender}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <Icon size={18} name="ring" color="#3743ab"></Icon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{ms}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View style={styles.sdSubContainer}>
          <EntIcon size={18} name="drop" color="#3743ab"></EntIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{blood}</Text>
        </View>
      </View>
    </View>
  );
};

export default SavedDetails;
