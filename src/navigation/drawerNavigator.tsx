import React from 'react';
import CareTaker from '../screens/caretaker/Caretaker';
import Caretakercomp from '../screens/caretaker/CaretakerComp';
import Patientcomp from '../screens/patient/Patient';
import CustomHeader from '../components/customHeader';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import CameraScreen from '../screens/adherence/ClickSendImage';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleStyle: {color: 'black'}}}
      drawerContent={props => <CustomHeader {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          headerRightContainerStyle: {marginRight: 15},
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Icon
                  name="camera"
                  size={30}
                  color="#3743ab"
                />
              </TouchableOpacity>
            );
          },
          drawerIcon: () => (
            <Icon
              name="home"
              size={22}
              color="white"
            />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Medicines"
        component={CareTaker}
        options={{
          title: 'Medicines',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerShown: true,
          drawerIcon: () => (
            <Icon
              color="white"
              size={20}
              name="medkit"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Patient"
        component={Patientcomp}
        options={{
          title: 'My Patient',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <IonIcon
              size={22}
              color="white"
              name='man'
             
            />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <Icon
              size={22}
              color="white"
              name='user-md'
            />
          ),
        }}
        name="My Caretaker"
        navig={this.navigation}
        component={Caretakercomp}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <IonIcon
              size={22}
              color="white"
             name='settings'
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Send Image"
        component={CameraScreen}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: () => (
            <Icon
              size={20}
              color="white"
              name='camera'
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
