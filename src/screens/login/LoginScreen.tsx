/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import { Signupuser } from '../../redux/apis/access';
import * as Progress from 'react-native-progress';
import styles from './loginStyles/LoginStyles';
import Logger from '../../components/logger';
const Loginscreen = ({navigation}) => {
  const [loading, loadingstate] = React.useState(false);

  async function loginuser() {
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      const token = await messaging().getToken();
      loadingstate(true);
      const response = await Signupuser.loginuser({userinfo, token});
      const res: any = await response.json();
     Logger.loggerInfo(res);
      if (res.status === 'Success') {
        await AsyncStorage.setItem('user_id', res.userEntity[0].userId);
        await AsyncStorage.setItem('user_name', res.userEntity[0].userName);
        await AsyncStorage.setItem('jwt', res.jwt);
        Toast.show({
          type: 'success',
          text1: 'Account created successfully',
        });
        loadingstate(false);

        setTimeout(() => {
          navigation.pop(1);
        }, 3000);
      } else {
        await GoogleSignin.signOut();
        loadingstate(false);
        Toast.show({
          type: 'info',
          text1: 'Error while login',
        });
      }
    } catch (err: any) {
      Logger.loggerError(err);
      if (await GoogleSignin.isSignedIn()) {
        await GoogleSignin.signOut();
      }
      Toast.show({
        type: 'info',
        text1: 'Failed',
      });
    }
  }

  return (
    <View style={styles.container}>
      <Toast visibilityTime={3000} />
      <Text style={styles.loginText}>{'LOGIN'}</Text>
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          loginuser()
            .then(() => Logger.loggerInfo('Google'))
            .catch(err => Logger.loggerError(err))
        }
      />
      {loading && (
        <Progress.CircleSnail
          spinDuration={1500}
          size={80}
          color={['red', 'green', 'yellow']}
        />
      )}
    </View>
  );
};

export default Loginscreen;
