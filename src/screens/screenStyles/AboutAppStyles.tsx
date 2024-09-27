import { StyleSheet, Dimensions} from "react-native";


const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
const height_logo = height * 0.35;
const width_logo = width * 1;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: height_logo,
      width: width_logo,
    },
    textContainer: {
      alignItems: 'center',
    },
    text: {
      marginTop: 30,
      paddingLeft: 4,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'gray',
    },
  });
  
  export default styles;