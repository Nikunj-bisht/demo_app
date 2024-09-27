import {StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

const styles = StyleSheet.create({
  container1: {
    height: '100%',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    // width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  image: {
    width: ITEM_WIDTH,
    height: 270,
    borderRadius: 10,
  },
  header: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 7,
  },
  bodyView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15,
    top: 10,
  },
  bodyView1: {flexDirection: 'row', justifyContent: 'flex-start'},
  body: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '700',
  },
  body1: {
    color: '#222',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },

  //main
  top: {height: '100%', backgroundColor: 'white', padding: 10},
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginBottom: 10,
  },
  date: {fontSize: 18, fontWeight: '700', color: 'black'},
  carousel: {height: 440, backgroundColor: 'white'},
  pageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'red',
  },
  pageContainer: {
    position: 'relative',
  },
  inactiveDot: {
    backgroundColor: 'black',
    // Define styles for inactive dots here
  },

  imgView: {position: 'absolute', alignSelf: 'center', top: 40},
  img: {width: 250},
});
export default styles;
