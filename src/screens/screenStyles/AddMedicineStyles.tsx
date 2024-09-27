import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
        borderRadius: 30,
        margin: 3,
        borderColor: 'lightgrey',
        elevation: 3,
        shadowColor: '#3743ab',
      },
    listView:{marginBottom: 7},
    list:{backgroundColor: 'white', height: 80},
    avatarView:{flexDirection: 'row'},
    medNameView:{flexDirection: 'column', margin: 3},
    medName:{fontWeight: '600'},
    rem:{marginRight: 10},
    container:{flex: 1, backgroundColor: 'white', height: '100%'},
    imgView:{alignItems: 'center', justifyContent: 'center'},
    img:{width: 250},
    bottom:{
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        bottom: 10,
      },
    addButtonTouch:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    addLottie:{
        bottom: 3,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      },  
    
});
export default styles;