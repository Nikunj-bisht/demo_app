import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white'},
  container1: {
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    width: '100%',
  },
  top: {
    backgroundColor: '#3743ab',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 83,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  topItem: {alignItems: 'center', marginBottom: 8},
  topItemText1: {color: 'white', fontWeight: 'bold', fontSize: 20},
  topItemText2: {color: 'white', fontWeight: 'bold'},
  editButton:{
    backgroundColor: '#3743ab',
    width: '48%',
    borderRadius: 30,
  },
  editButtonConatiner:{alignItems: 'center'},
  inputContainer:{backgroundColor: 'white', width: '99%'},
  textInput: {
    height: 50,
    width: '98%',
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  pickercontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  pickerContainer:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 7,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 8,
  },
  picker: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  pickerIcon:{
    justifyContent: 'center',
    paddingLeft: 15,
  },
  bgPickerView: {
    flex: 1,
    width: '97%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  bgPicker:{
    backgroundColor: 'white',
    width: '100%',
  },
  pickerItem:{color: 'grey'},
  pickerText:{color: 'red', alignSelf: 'center'},
  saveButtonView:{paddingBottom: 20},
  saveButton:{
    backgroundColor: '#3743ab',
    width: 300,
    marginTop: 8,
    borderRadius: 30,
  },
  saveButtonContainer:{alignItems:'center'},
  sd: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 8,
    width: '95%',
  },
  sdContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 0,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 12,
    padding: 15,
  },
  sdSubContainer:{
    justifyContent: 'center',
  },
  sdText: {
    paddingLeft: 18,
  },
  sdText1: {
    fontSize: 17,
    color: 'grey',
  },
});

export default styles;
