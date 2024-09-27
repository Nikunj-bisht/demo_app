/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import checkConnectivity from '../../connection/checkConnectivity';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-elements';
import { Signupuser } from '../../redux/apis/access';
import styles from './loginStyles/GoogleAuthStyles';
import Logger from '../../components/logger';

interface Props {
  navigation: any;
}

const Login: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const [loading, loadingstate] = React.useState(false);
  const [_connected, connectedstate] = React.useState(false);

  async function checkconnection() {
    let conn: any = await checkConnectivity();
    connectedstate(conn);
  }
  React.useEffect(() => {
    checkconnection();
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      const token = await messaging().getToken();
      Logger.loggerInfo(userinfo);
      loadingstate(true);
      const response = await Signupuser.signup({userinfo, token});
      const res: any = await response.json();

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
          text1: 'User with this email already present',
        });
      }
    } catch (err: any) {
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
      <Text style={styles.createText}>Create an account</Text>
      <LottieView
        style={styles.lottie}
        source={require('../../../assests/animate/google.json')}
        autoPlay
        loop
      />

      <GoogleSigninButton
        style={styles.googleSignIn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => Logger.loggerInfo('Google'))
            .catch(err => Logger.loggerError(err))
        }
      />

      {loading && (
        <Progress.CircleSnail
          spinDuration={1000}
          size={80}
          color={['red', 'green', 'yellow']}
        />
      )}
    </View>
  );
};

export default Login;
