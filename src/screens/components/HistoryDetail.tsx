/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props {
  data: any;
  modalVisibility: any;
}

const HistoryDetail: React.FC<Props> = ({data, modalVisibility}) => {
  const [filterData, setfilterData] = useState([]);
  function findTime(ele) {
    let time = parseInt(ele.split(':')[0]),
      period = ele.split(' ')[1],
      mtitle;
    if (time >= 6 && time <= 12 && period === 'AM') {
      mtitle = 'Morning';
    } else if (time >= 12 && time <= 18 && period === 'PM') {
      mtitle = 'Afternoon';
    } else if (time >= 18 && time <= 24 && period === 'PM') {
      mtitle = 'Night';
    }

    return mtitle;
  }
  useEffect(() => {
    const sArray = [];
    let nottaken = data.notTaken.split(','),
      taken = data.taken.split(',');
    nottaken[0] !== '' &&
      nottaken.map(ele => {
        let mtitle = findTime(ele);
        let nottakenObj = {
          time: ele,
          title: <Text style={{color: 'black'}}>{mtitle}</Text>,
          description: <Text style={{color: 'red'}}>No Taken</Text>,
        };
        sArray.push(nottakenObj);
      });

    taken[0] !== '' &&
      taken.map(ele => {
        let mtitle = findTime(ele);

        let nottakenObj = {
          time: ele,
          title: <Text style={{color: 'black'}}>{mtitle}</Text>,
          description: <Text style={{color: 'green'}}>Taken</Text>,
        };
        sArray.push(nottakenObj);
      });

    setfilterData(sArray);
  }, []);

  return (
    <View
      style={{
        height: '85%',
        width: '90%',
        backgroundColor: 'white',
        marginTop: 80,
        marginBottom: 80,
        flex: 1,
        borderRadius: 20,
      }}>
      <View style={{alignItems: 'flex-end', paddingRight: 10, paddingTop: 10}}>
        <Icon
          size={24}
          name='trash'
          color="#3743ab"
          onPress={modalVisibility}
        />
      </View>
      <View style={{padding: 12, alignItems: 'center'}}>
        <Text style={{color: 'grey', fontSize: 20, fontWeight: '700'}} testID='dateText' >
          Date - {data.date}  
        </Text>
      </View>
      <Timeline
        style={{flex: 1, color: 'white', marginLeft: 10}}
        data={filterData}
        circleSize={20}
        circleColor="#4dd0e1"
        lineColor="#4dd0e1"
        listViewStyle={{padding: 10}}
        timeContainerStyle={{minWidth: 52}}
        timeStyle={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#4dd0e1',
          padding: 5,
          marginBottom: 80,
          borderRadius: 20,
        }}
        titleStyle={{
          padding: 0,
        }}
        descriptionStyle={{marginTop: 8}}
        isUsingFlatlist={true}
        innerCircle={'dot'}
      />
    </View>
  );
};

export default HistoryDetail;
