import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from "./screenStyles/AboutAppStyles";

const AboutApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          testID='aboutImg'
          style={styles.image}
          source={require('../../assests/images/Medstick_1.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text testID='aboutText' style={styles.text}>
          Medicine Adherence app which allows user to use medicine, reminder, caretaker, patient, report and more features and never skip their medications.
        </Text>
      </View>
    </View>
  );
};

export default AboutApp;