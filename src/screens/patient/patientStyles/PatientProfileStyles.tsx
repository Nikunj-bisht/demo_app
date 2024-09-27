import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{height: '100%', backgroundColor: 'white'},
    conatiner1:{
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    container2: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%',
      },
      iconView:{justifyContent: 'flex-end'},
      icon: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
      },
      top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: 110,
      },
      nameView:{flexDirection: 'column'},
      name:{paddingLeft: 5, paddingTop: 9},
      nameText:{color: 'black', padding: 5, fontSize: 17},
      itemView:{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
      },
      items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 12,
      },
      itemleft: {},
      itemright: {
        color: 'black',
        width: 200,
      },


    //med details 
    list:{backgroundColor: 'white'},
    medTitle:{
        //   marginLeft: 20,
        fontSize: 15,
        fontWeight: '500',
      },
    medIcon:{marginLeft: 8},  
    listItem:{
        padding: 17,
        alignItems: 'center',
        height: 110,
        justifyContent: 'center',
      },
    listTitle: {
        fontSize: 14,
        marginTop: -13,
      },
    medContainerRight:{
        flexDirection: 'row',
        alignItems: 'center',
      },
    touch:{
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 40,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
      },
          
});
export default styles;