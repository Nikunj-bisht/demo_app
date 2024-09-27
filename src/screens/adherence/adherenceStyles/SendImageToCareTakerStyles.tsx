import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //cn --- caretakerName
  cnConatiner: {flexDirection: 'row'},
  cnChechBoxIcon: {borderColor: '#3743ab', borderWidth: 1.3},
  cnCheckBoxText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 17,
    color: 'black',
  },
  cnText: {fontWeight: '600', fontSize: 18},
  cnView: {padding: 50},

  //mn --- medicineNAme
  mnView: {marginTop: 10},
  mnText: {marginLeft: 8},

  //main container
  container: {height: '100%', padding: 20, backgroundColor: 'white'},
  modal: {alignItems: 'center'},
  modalOuterView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  modalInnerView: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '70%',
    height: '50%',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  container1Text: {fontWeight: '900'},
  image: {height: '60%', width: '100%', borderRadius: 20},

  //BottomButton
  button: {backgroundColor: '#3743ab'},
  buttonConatiner: {marginTop: 25},
});

export default styles;
