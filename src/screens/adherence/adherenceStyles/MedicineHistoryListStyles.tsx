import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  conatiner: {padding: 4, marginBottom: 15},
  notTaken: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
    marginLeft: 7,
  },
  taken: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  notTakenText: {color: 'red'},
  takenText: {color: 'green'},
  dateDay: {
    borderRadius: 6,
    elevation: 2,
    marginTop: 8,
    padding: 14,
  },
  card: {flexDirection: 'row', justifyContent: 'space-between'},
  cardText: {flexDirection: 'row', justifyContent: 'space-around'},
});

export default styles;
