import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', height: '100%'},
  container1: {padding: 15, backgroundColor: 'lightgrey'},
  container1Text: {fontWeight: 'bold'},
  container2: {justifyContent: 'center', alignItems: 'center'},
  container2Image: {width: 250},
  //cb --- CheckBox
  cbContainer: {padding: 15, paddingLeft: 30, marginTop: 14},
  cbIcon: {borderColor: '#3743ab', borderWidth: 1.3},
  cbText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 17,
    color: 'black',
  },
  cbText1: {color: 'green', marginLeft: 40},
  cbText2: {color: 'red', marginLeft: 40},
});

export default styles;
