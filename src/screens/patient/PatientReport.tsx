/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  PermissionsAndroid,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { logger } from 'react-native-logs';
import Toast from 'react-native-toast-message';

import ProgressCircle from 'react-native-progress-circle';
import {Button, Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import networkCalls from '../../connection/networkCalls';
import * as Animatable from 'react-native-animatable';
import downloadPdf from '../../components/adherence/downloadPdf';
import LottieView from 'lottie-react-native';
import HistoryDetail from '../../screens/components/HistoryDetail';
import AdherencePercentage from '../../components/adherence/adherencePercentage';
import styles from './patientStyles/PatientReportStyles';
import Logger from '../../components/logger';

let detailData = {};

var weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const Reminders = ({item, index}) => {
  Logger.loggerInfo(item, 'ite');
  const nottaken = item.notTaken.split(',');
  const taken = item.taken.split(',');
  let tl: number, nt: number;
  nt = nottaken[0] === '' ? 0 : nottaken.length;
  tl = taken[0] === '' ? 0 : taken.length;
  return (
    <Animatable.View animation="slideInLeft" duration={500} delay={index * 180}>
      <>
        <Card key={'2'} style={styles.dateday}>
          <View key={'3'} style={styles.cardView}>
            <View style={styles.dateView}>
              <Text key={'7'} style={styles.date}>
                Date - {item.date}
              </Text>
            </View>
            {
              <View style={styles.progressView}>
                <ProgressCircle
                  percent={Math.round((tl / (tl + nt)) * 100)}
                  radius={20}
                  borderWidth={3}
                  color="#4dd0e1"
                  shadowColor="#e3f2fd"
                  bgColor="#fff">
                  <Text style={styles.progressText}>
                    {Math.round((tl / (tl + nt)) * 100) + '%'}
                  </Text>
                </ProgressCircle>
              </View>
            }
          </View>
          <Divider style={styles.divider} />
          {nottaken.map(nti => {
            return (
              nti !== '' && (
                <View key={'4'} style={styles.notTakenView}>
                  <Text key={'5'}>{nti}</Text>
                  <Text key={'6'} style={styles.notTakenText}>
                    {' '}
                    Not Taken
                  </Text>
                </View>
              )
            );
          })}
          {taken.map(tti => {
            return (
              tti !== '' && (
                <View key={'12' + tti} style={styles.notTakenView}>
                  <Text key={'22'}>{tti}</Text>
                  <Text key={'23'} style={styles.takenText}>
                    {' '}
                    Taken
                  </Text>
                </View>
              )
            );
          })}
        </Card>
      </>
    </Animatable.View>
  );
};
const route = useRoute();
export default function PatientReport({route}) {
  const {
    medId,
    medName,
    mTimes,
    medDays,
    mstartDate,
    mendDate,
    mcc,
  } = route.params;
  const [historyData, setHistoryData] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [allDates, setallDates] = useState([]);
  const [showDetail, showDetailState] = useState(false);
  const [adherence, setadherence] = useState(0);
  async function fetchHistory() {
    const response: any = await networkCalls.getmedicineHistory(medId);
    response.status === 'OK'
      ? setHistoryData(response.userMedicinesList)
      : setHistoryData([]);
    AdherencePercentage(mstartDate, medDays, mTimes, mcc, '').then(per =>
      setadherence(per),
    );
  }
  function showalldates() {
    let alldates = [];
    let msd = new Date(mstartDate),
      mld = new Date(mendDate);
    let daysSet = new Set(medDays.split(':'));
    let todayDate = new Date();
    while (msd <= mld) {
      if (daysSet.has(weeks[msd.getDay()])) {
        let currentDate = new Date(msd);
        const dateObj = {day: '', date: '', month: 0, color: '', year: 0};
        dateObj.day = weeks[currentDate.getDay()];
        dateObj.date = currentDate.getDate().toString();
        dateObj.month = currentDate.getMonth();
        dateObj.color = currentDate < todayDate ? '#e3f2fd' : '#4dd0e1';
        dateObj.year = currentDate.getFullYear();
        alldates.push(dateObj);
      }
      msd.setDate(msd.getDate() + 1);
    }
    setallDates(alldates);
  }

  const showDetailfun = sDate => {
    detailData = historyData.find(el => el.date === sDate);
   Logger.loggerInfo(detailData);
    if (detailData === undefined) {
      Toast.show({
        type: 'info',
        text1: 'Not available!',
      });
      return;
    }
    showDetailState(true);
    setModalVisible(true);
  };

  function modalVisibilityfun() {
    showDetailState(false);
    setModalVisible(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchHistory().then(() => {
        showalldates();
      });
      return () => {
       /* do nothing */
      };
    }, []),
  );
  useFocusEffect(() => {/* do nothing */});

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}>
        <View style={styles.detailView}>
          {showDetail ? (
            <HistoryDetail
              data={detailData}
              modalVisibility={modalVisibilityfun}
            />
          ) : (
            <LottieView
              style={styles.lottie}
              speed={0.8}
              source={require('../../../assests/animate/generatepdf.json')}
              autoPlay
              loop
            />
          )}
        </View>
      </Modal>
      <>
        <View style={styles.top}>
          <View style={styles.container1}>
            <ProgressCircle
              percent={adherence}
              radius={60}
              borderWidth={13}
              color="#4dd0e1"
              shadowColor="#e3f2fd"
              bgColor="#fff">
              <Text style={styles.progress}>{adherence + '%'}</Text>
            </ProgressCircle>
            <View style={styles.medView}>
              <Text style={styles.medText}>{medName}</Text>
            </View>
          </View>
        </View>
      </>
      <View style={styles.subContainer}>
        <View style={styles.datesView}>
          <Text style={styles.scheduleDateText}>
            Scheduled Dates for {medName}
          </Text>
          <ScrollView horizontal={true}>
            {allDates.map(mcurrenntDate => {
              return (
                <View style={styles.dayView}>
                  <Text style={styles.dayText}>{mcurrenntDate.day}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      showDetailfun(
                        mcurrenntDate.date +
                          '-' +
                          (mcurrenntDate.month + 1) +
                          '-' +
                          mcurrenntDate.year,
                      )
                    }>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginRight: 10,
                        marginLeft: 10,
                        padding: 13,
                        width: 70,
                        alignItems: 'center',
                        borderRadius: 60,
                        justifyContent: 'center',
                        backgroundColor: mcurrenntDate.color,
                      }}>
                      <Text style={styles.dateText}>{mcurrenntDate.date}</Text>
                      <Text style={styles.monthText}>
                        {months[mcurrenntDate.month]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Text style={styles.medicineHisText}>Medicine History</Text>
        <FlatList
          data={historyData}
          renderItem={({item, index}) => {
            return <Reminders item={item} index={index} />;
          }}
        />
        <Button
          title={'Download PDF'}
          titleStyle={styles.buttonTitle}
          onPress={async () => {
            await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
            await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            );
            setModalVisible(true);
            const downloadResp = await downloadPdf(medId);
            setModalVisible(false);
            if (downloadResp !== 'err') {
              Toast.show({
                type: 'info',
                text1: 'Downloaded successfully'
              });
            } else {
              Toast.show({
                type: 'info',
                text1: 'Error while downloading'
              })
            }
          }}
          buttonStyle={styles.button}>
          Download PDF
        </Button>
      </View>
    </View>
  );
}
