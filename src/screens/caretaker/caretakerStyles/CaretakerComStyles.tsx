import {StyleSheet} from "react-native"


const styles = StyleSheet.create({

  //Add a caretaker screen
    container:{flex: 1, backgroundColor: 'white', height: '100%'},
    img:{width: 250},
    imgView:{position:'absolute',alignSelf:'center',top:90},
    sdContainer:{bottom: 0, alignItems: 'center'},
    sd:{backgroundColor: 'white'},
    sdIcon:{name: 'add', color: 'white'},
    sdIconOpen:{name: 'close', color: 'white'},
    sdButton:{backgroundColor: '#3743ab'},
    sdDeleteIcon:{name: 'delete', color: 'white'},
    sdHeight:{height: 50},
    button:{backgroundColor: 'white'},


    //redering caretakerList
    cardContainer:{
        borderRadius: 20,
        margin: 6,
        borderColor: 'lightgrey',
        elevation: 3,
        shadowColor: '#3743ab',
      },
    top:{flexDirection: 'row', padding: 0},
    listContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
      },
    listTitle:{fontSize: 16, marginLeft: 3, fontWeight: 'bold'},
    icon:{alignItems: 'center'},
    iconTouch:  {paddingVertical: 15},

    //caretaker component
    tab:{backgroundColor: '#3743ab'},
    tabIndicator:{
      backgroundColor: '#3743ab',
      height: 3,
    },
    tabItemContainer:{backgroundColor: 'white'},
    tabItemTitle:{fontSize: 12, color: '#3743ab'},
    tabItem:{backgroundColor: 'white', width: '100%'},
});
export default styles;