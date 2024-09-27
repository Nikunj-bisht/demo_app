/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function Caretaker_nurse() {
  return (
    <Icon
      style={{marginBottom: 6}}
      color="#3743ab"
      name='user-nurse'></Icon>
  );
}

function Signout() {
  return <MatIcon color="white" name='logout'></MatIcon>;
}

function Righttoobracket() {
  return (
    <MatIcon color="white" name='login'></MatIcon>
  );
}

function Userfriend() {
  return (
    <Icon
      style={{marginBottom: 6}}
      color="#3743ab"
     name='users'></Icon>
  );
}

export {Caretaker_nurse, Userfriend, Righttoobracket, Signout};
