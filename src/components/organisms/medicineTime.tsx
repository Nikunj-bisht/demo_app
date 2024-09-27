import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from '../../screens/adherence/adherenceStyles/TodayPerformanceStyles';

const Box = (props: any) => {
  const {time, updatetimes} = props;
  const [med1, setMed1] = useState(false);
  const [taken, takenstatus] = useState(false);

  return (
    time.length !== 0 && (
      <View style={styles.cbContainer}>
        <BouncyCheckbox
          size={22}
          fillColor="#3743ab"
          unfillColor="#FFFFFF"
          text={time}
          disabled={taken}
          isChecked={med1}
          iconStyle={styles.cbIcon}
          textStyle={styles.cbText}
          disableBuiltInState
          onPress={() => {
            setMed1(!med1);
            takenstatus(!taken);
            updatetimes(time);
          }}
        />
        {taken ? (
          <Text style={styles.cbText1}>Taken</Text>
        ) : (
          <Text style={styles.cbText2}>Not Taken</Text>
        )}
      </View>
    )
  );
};
export default Box;
