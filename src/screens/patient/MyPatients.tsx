/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import UserAvatar from 'react-native-user-avatar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styles from './patientStyles/MyPatientStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPatients} from '../../redux/actions/patient/PatientActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
}
const Mypatient: React.FC<Props> = ({navigation}: Props) => {
  const patients = useSelector(state => state.PatientReducer.patientList);
  // const {load} = useSelector(state => state.PatientReducer.patirntList);
  // log.info(load, 'load');
  const [data, _datastate] = React.useState([]);
  const [refresh, refeereshstate] = React.useState(false);

  const dispatch = useDispatch();
  const fetchpatients = async () => {
    let user_id = await AsyncStorage.getItem('user_id');
    dispatch(fetchPatients(user_id));
    refeereshstate(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      async function checkforlog() {
        const islogged = await GoogleSignin.isSignedIn();
        if (!islogged) {
          Alert.alert(
            'Sign in first to use this feature',
            'Click ok to proceed',
            [
              {
                text: 'Ok',
                onPress: () => {
                  navigation.navigate('Login');
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  navigation.navigate('Home');
                },
              },
            ],
          );
        } else {
          fetchpatients();
        }
      }

      checkforlog();

      return () => {
        /* do nothing */
      };
    }, []),
  );

  const renderitem = ({item}) => {
    return (
      <Card
        onPress={() => {
          navigation.navigate('Patient Profile', {
            user_id: item.patientId,
          });
        }}
        style={styles.card}>
        <View style={styles.top}>
          <ListItem
            style={styles.list}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <UserAvatar size={60} name={item.patientName}></UserAvatar>

            <ListItem.Content>
              <ListItem.Title style={styles.patientName}>
                {item.patientName}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Created on :' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity
              onPress={() => {
                /* do nothing */
              }}
              style={styles.touch}>
              <View style={styles.icon}>
                <Icon name="angle-right" color={'black'} size={25} />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderitem}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatients}></RefreshControl>
        }></FlatList>
      {data.length === 0 && (
        <View style={styles.imgView}>
          <Image
            source={require('../../../assests/images/nopatients.png')}
            style={styles.img}
            resizeMode="contain"></Image>
        </View>
      )}
    </View>
  );
};

export default Mypatient;
