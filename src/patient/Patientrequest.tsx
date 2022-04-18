/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Image, RefreshControl, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import {API_URL} from '@env';
import {ListItem, Button} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';

const Patientrequest = () => {
  const [patients, patientsdata] = React.useState([]);
  const [refresh, refreshstate] = React.useState(false);

  const fetchpatientreq = () => {
    console.log('called');
    fetch(
      `${API_URL}/api/caretaker/patientRequests(Caretaker)?caretakerId=f9c67686-55f9-495a-b214-eb89d5606678`,
    )
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        patientsdata(resp);
      })
      .catch(err => {});
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchpatientreq();

      return () => {
        isActive = false;
      };
    }, []),
  );
  const acceptrequest = (ci_id: String) => {
    let url: any = new URL(`${API_URL}/api/caretaker/updatestatus`);
    url.searchParams.append('cId', ci_id);

    fetch(url, {method: 'PUT'})
      .then(res => {
        console.log(res);
        fetchpatientreq();
      })
      .catch(err => console.log(err));
  };
  const deletereq = (ci_id: String) => {
    let url: any = new URL(`${API_URL}/api/caretaker/deletePatientRequest`);
    url.searchParams.append('cId', ci_id);

    fetch(url)
      .then(res => {
        console.log(res);
        fetchpatientreq();
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      {patients.length === 0 && (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assests/nopatientreq.png')}
            style={styles.image}
            resizeMode="contain"></Image>
        </View>
      )}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatientreq}></RefreshControl>
        }
        data={patients}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatarContainer}>
                <Avatar
                  size={100}
                  rounded
                  source={{
                    uri: 'https://lh3.googleusercontent.com/a-/AOh14GgrRBm3gFrvPSRlLYSiaY5KO-HpPKl1IhK3Z3rePg=s96-c',
                  }}></Avatar>
              </View>
              <View style={{flexDirection: 'column'}}>
                <ListItem
                  style={styles.ListItem}
                  hasTVPreferredFocus={undefined}
                  tvParallaxProperties={undefined}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.title}>
                      {item.patientName}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>
                      {' Sent on : ' + item.createdAt}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
                <View style={styles.btnContainer}>
                  <Button
                    onPress={() => {
                      acceptrequest(item.cid);
                    }}
                    title="Confirm"
                    buttonStyle={styles.confirmBtn}
                    color="#4267B2"></Button>
                  <View style={styles.deleteBtnContainer} />
                  <Button
                    onPress={() => {
                      deletereq(item.cid);
                    }}
                    title="Delete"
                    buttonStyle={styles.deleteBtn}
                    color="#e53935"></Button>
                </View>
              </View>
            </View>
          </Card>
        )}></FlatList>
    </View>
  );
};

export default Patientrequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
  },
  card: {
    elevation: 2,
    margin: 6,
    borderRadius: 25,
  },
  avatarContainer: {
    marginTop: 10,
    marginLeft: 6,
  },
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginLeft: 13,
  },
  btnContainer: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  confirmBtn: {
    width: 100,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: '#4267B2',
  },
  deleteBtnContainer: {
    margin: 5,
  },
  deleteBtn: {
    width: 100,
    borderRadius: 25,
    backgroundColor: '#d32f2f',
  },
});
