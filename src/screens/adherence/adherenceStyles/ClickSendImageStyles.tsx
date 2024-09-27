import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {height: '100%'},
  innerView: {flex: 1},
  camera: {height: '100%'},
  image: {
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  lottieAnimation: {width: 240, height: 240},
});
export default styles;
