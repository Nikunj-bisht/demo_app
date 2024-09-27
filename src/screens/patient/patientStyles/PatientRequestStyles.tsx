import { StyleSheet } from "react-native";

const styles= StyleSheet.create({

    container:{flex: 1, backgroundColor: 'white'},
    imgView:{position:'absolute',alignSelf:'center',top:90},
    img:{width:250},
    card:{elevation: 2, margin: 6, borderRadius: 25},
    cardInner:{flexDirection: 'row'},
    avatar:{marginTop: 10, marginLeft: 6},
    container1:{flexDirection: 'column'},
    list:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    listTitle:{
        fontSize: 18,
        marginLeft: 15,
        fontWeight: '900',
        textTransform: 'uppercase',
      },
    listSubTitle:{
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        marginLeft: 13,
      },
    buttonView:{flexDirection: 'row', marginLeft: 25},
    confirmButton:{
        width: 100,
        borderRadius: 25,
        marginBottom: 10,
        backgroundColor: '#4267B2',
      },
    space:{margin: 5},
    deleteButton:{
        width: 100,
        borderRadius: 25,
        backgroundColor: '#d32f2f',
      },
});
export default styles;