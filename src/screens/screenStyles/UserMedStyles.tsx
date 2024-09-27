import { StyleSheet, Dimensions } from "react-native";



const height = Dimensions.get('window').height;
const styles = StyleSheet.create({

    
    container:{backgroundColor: '#3743ab', height: '100%', width: '100%'},
    lottieView:{alignItems: 'center', justifyContent: 'center'},
    lottie:{width: 300, height: 300},
    
    container1:{
        padding: 25,
        height: height / 1.2,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
      },
    addMedText:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 40,
      },
    error:{color: 'red'}, 
    description: {marginTop: 10},
    button:{
        backgroundColor: '#3743ab',
        width: '80%',
        height: '30%',
        borderRadius: 10,
      },
    buttonContainer:{
        width: '100%',
        position: 'relative',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonTitle:{color: 'white', marginHorizontal: 20},

});
export default styles;