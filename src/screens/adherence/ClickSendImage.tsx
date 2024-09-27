/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './adherenceStyles/ClickSendImageStyles';
import Logger from '../../components/logger';

const CameraScreen = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}></RNCamera>

        <TouchableOpacity
          onPress={async () => {
            const data = await takePicture();
            Logger.loggerInfo(data.uri);
            navigation.navigate('Sentocaretaker', {
              image_uri: data.uri,
            });
          }}
          style={styles.image}>
          <LottieView
            style={styles.lottieAnimation}
            source={require('../../../assests/animate/camera1.json')}
            autoPlay
            loop></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
