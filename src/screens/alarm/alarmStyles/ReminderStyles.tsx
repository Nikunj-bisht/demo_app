import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {height: '100%', backgroundColor: 'white'},
  top: {height: '100%', backgroundColor: 'white'},
  container1: {height: '100%', padding: 7, marginBottom: 15},
  containerTouch: {height: 100, flexDirection: 'row', marginTop: 10},
  dateContainer: {flexDirection: 'column', width: '100%'},
  dateText: {fontSize: 15, marginLeft: 8, fontWeight: '700'},
  dateText1: {
    fontSize: 15,
    marginLeft: 8,
    color: 'black',
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    marginLeft: 8,
    marginTop: 10,
    fontWeight: '700',
    marginBottom: 2,
  },
  titleText: {margin: 8, marginBottom: 20, marginTop: 16},
  timeTouch: {height: 60, flexDirection: 'row', marginTop: 10},
  timeContainer: {flexDirection: 'column', width: '100%'},
  selectTime: {
    fontSize: 15,
    marginLeft: 8,
    fontWeight: '700',
    marginBottom: 5,
  },
  downIcon: {right: 0, position: 'absolute'},
  timeTextConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  timeText: {fontWeight: '800'},
  selectDays: {fontSize: 15, fontWeight: '700'},
  days: {padding: 10},
  durationContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 18,
  },
  durationText: {fontWeight: '700'},
  multiSlider: {alignItems: 'center'},
  buttonStyle: {backgroundColor: '#3743ab', width: '50%'},
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
  },
});
export default styles;
