/* eslint-disable react/self-closing-comp */
import React from 'react';
import Mypatient from './MyPatients';
import Patientrequest from './PatientRequest';
import {Tab, TabView} from 'react-native-elements';
import styles from './patientStyles/PatientStyles';

import Icon from 'react-native-vector-icons/FontAwesome5'

const Patientcomp = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const Iconcomp1 = () => {
    return (
      <Icon
        style={styles.icon}
        color="#3743ab"
        name='hospital-user'
       ></Icon>
    );
  };

  const Iconcomp2 = () => {
    return (
      <Icon
        style={styles.icon}
        color="#3743ab"
        name='users'
        ></Icon>
    );
  };

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.tabIndicator}
        style={styles.tab}
        variant="primary">
        <Tab.Item
          title="My Patients"
          containerStyle={styles.tabItem}
          titleStyle={styles.tabTitle}
          icon={Iconcomp1}
        />
        <Tab.Item
          title="Patient Request"
          titleStyle={styles.tabTitle}
          containerStyle={styles.tabItem}
          icon={Iconcomp2}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabItems}>
          <Mypatient navigation={navigation}></Mypatient>
        </TabView.Item>
        <TabView.Item style={styles.tabItems}>
          <Patientrequest></Patientrequest>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Patientcomp;
