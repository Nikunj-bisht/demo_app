import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //customHeaders
  drawer: {height: '100%', backgroundColor: '#3743ab'},
  touch: {marginBottom: 8},
  top: {marginTop: 60, alignItems: 'center'},
  button: {
    backgroundColor: '#3743ab',
    borderRadius: 5,
    justifyContent: 'space-around',
    borderColor: 'white',
    borderWidth: 0.4,
  },
  buttonTitle: {fontWeight: 'bold', fontSize: 23},
  buttonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
  buttonLogOutTitle: {fontWeight: '500', fontSize: 16},

  //header
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3743ab',
    marginBottom: 20,
  },
  img: {width: 100, height: 100, borderRadius: 70, marginBottom: 9},
  nameConatiner: {alignItems: 'center'},
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  text: {fontWeight: 'bold', color: 'white'},
});
export default styles;
