import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //list of Patients
  card: {
    borderRadius: 30,
    margin: 6,
    borderColor: 'lightgrey',
    elevation: 5,
    shadowColor: '#3743ab',
  },
  top: {flexDirection: 'row', padding: 0},
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  patientName: {fontSize: 16, marginLeft: 3, fontWeight: 'bold'},
  touch: {paddingVertical: 15},
  icon: {alignItems: 'center'},

  //main
  container: {backgroundColor: 'white', height: '100%'},
  img: {width: 250},
  imgView: {position: 'absolute', alignSelf: 'center', top: 90},
});
export default styles;
