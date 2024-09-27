/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {Button, ListItem, SpeedDial} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card} from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import {useDispatch, useSelector} from 'react-redux';
import fetchCaretakers from '../../redux/actions/caretaker/CaretakerActions';
import styles from './caretakerStyles/CaretakerComStyles';

import Icon from 'react-native-vector-icons/FontAwesome';
import Logger from '../../components/logger';

interface Props {
  navigation: any;
}
const Addcaretaker: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const caretakers = useSelector(
    state => state.CareTakerReducer.userCaretakerList,
  );
  const {load} = useSelector(state => state.CareTakerReducer);
  Logger.loggerInfo(load);
  const [refresh, refeereshstate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const fetchcaretakers = async () => {
    let user_id = await AsyncStorage.getItem('user_id');
    dispatch(fetchCaretakers(user_id));
    refeereshstate(false);
  };

  useEffect(() => {
    fetchcaretakers();
  }, []);
  const renderitem = ({item}) => {
    Logger.loggerInfo(item.patientId);

    return (
      <Card
        onPress={() => {
          /* do nothing */
        }}
        style={styles.cardContainer}>
        <View style={styles.top}>
          <ListItem
            style={styles.listContainer}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <UserAvatar size={60} name={item.caretakerUsername}></UserAvatar>
            <ListItem.Content>
              <ListItem.Title style={styles.listTitle}>
                {item.caretakerUsername}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Accepted on : ' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity
              onPress={() => {
                /* do nothing */
              }}
              style={styles.iconTouch}>
              <View style={styles.icon}>
                <Icon name="angle-right" color={'black'} size={17} />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <FlatList
          data={caretakers}
          renderItem={renderitem}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={fetchcaretakers}></RefreshControl>
          }></FlatList>
        {load && (
          <View style={styles.imgView}>
            <Image
              source={require('../../../assests/images/nocaretakers.jpg')}
              style={styles.img}
              resizeMode="contain"></Image>
          </View>
        )}
        <View style={styles.sdContainer}>
          <SpeedDial
            isOpen={open}
            style={styles.sd}
            overlayColor="white"
            buttonStyle={styles.sdButton}
            icon={styles.sdIcon}
            openIcon={styles.sdIconOpen}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={styles.sdIcon}
              title="Add Caretaker"
              style={styles.sdHeight}
              buttonStyle={styles.sdButton}
              onPress={() => navigation.navigate('Search Caretaker')}
            />
            <SpeedDial.Action
              icon={styles.sdDeleteIcon}
              title="Delete"
              buttonStyle={styles.sdButton}
              style={styles.sdHeight}
              onPress={() => log.warn('Delete Something')}
            />
          </SpeedDial>
          <Button buttonStyle={styles.button} title="A"></Button>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Addcaretaker;
