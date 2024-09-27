/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import {Button, ListItem, SearchBar} from 'react-native-elements';
import {API_URL} from '../../repositories/var';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import UserAvatar from 'react-native-user-avatar';
import styles from './caretakerStyles/SearchCaretakerStyles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Toast from 'react-native-toast-message';
import Logger from '../../components/logger';

const Searchcaretaker = ({navigation}) => {
  const [data, datastate] = React.useState([]);
  const [searchload, searchloadstate] = React.useState(false);

  const sendmailtouser = async (email: any) => {
    searchloadstate(true);
    let udet = await GoogleSignin.getCurrentUser();
    if (udet.user.email === email) {
      Toast.show({
        type: 'info',
        text1: 'You cannot be self caretaker',
      });
      searchloadstate(false);

      return;
    }
    fetch(`${API_URL}/api/v1/email?email=${email}&sender={udet.user.givenName}`)
      .then(res => res.json())
      .then(resp => {
        searchloadstate(false);

        datastate([resp]);
      })
      .catch(() => {
        searchloadstate(false);
        Toast.show({
          type: 'success',
          text1: 'Invitation mail has been sent successfully!',
          position: 'bottom',
        });
        datastate([]);
      });
  };

  const sendreqtocaretaker = async (
    caret_id: string,
    caret_username: string,
  ) => {
    const pnt_id = await AsyncStorage.getItem('user_id');
    const pt_name = await AsyncStorage.getItem('user_name');
    fetch(`${API_URL}/api/v1/request`, {
      method: 'POST',
      body: JSON.stringify({
        caretakerId: caret_id,
        caretakerUsername: caret_username,
        patientId: pnt_id,
        patientName: pt_name,
        reqStatus: false,
        sentBy: 'P',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res: any) => {
        return res.json();
      })
      .then(resp => {
        if (resp.status === 'Success') {
          navigation.pop(1);
        } else {
          Logger.loggerInfo(resp);
          Toast.show({
            type: 'info',
            text1: resp.message,
          });
        }
      })
      .catch(err => Logger.loggerError(err));
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
  });

  const Renderitem = ({item}) => {
    const [sendloader, setloadstate] = useState(false);

    return (
      <ListItem
        style={styles.listItemContainer}
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}>
        <ListItem.Content>
          <UserAvatar size={40} name={item.userName}></UserAvatar>
          <ListItem.Title>{item.userName}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          loading={sendloader}
          title="Send request"
          buttonStyle={styles.listButton}
          onPress={async () => {
            setloadstate(true);
            await sendreqtocaretaker(item.userId, item.userName);
            setloadstate(false);
          }}></Button>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <Toast position="bottom" bottomOffset={20} visibilityTime={2000} />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: ''}}
        onSubmit={values => sendmailtouser(values.email)}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <SearchBar
              placeholder="Search Caretaker.."
              value={values.email}
              onChangeText={handleChange('email')}></SearchBar>
            <Text style={styles.text}>{touched.email && errors.email}</Text>

            <Button
              loading={searchload}
              buttonStyle={styles.button}
              title="Search"
              onPress={() => handleSubmit()}
              containerStyle={styles.buttonContainer}></Button>
          </>
        )}
      </Formik>
      {data.length === 0 && (
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assests/images/searchcaretaker.png')}
            style={styles.img}
            resizeMode="stretch"></Image>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Renderitem item={item}></Renderitem>
        )}></FlatList>
    </View>
  );
};
export default Searchcaretaker;
