
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {API_URL} from '../../repositories/var';
import styles from './patientStyles/MedicineImagesStyles';
import Logger from '../../components/logger';

LogBox.ignoreAllLogs();
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);
const CarouselCardItem = ({item}) => {
  const [load, setload] = useState(true);
 Logger.loggerInfo(item);
  return (
    <View style={styles.container1}>
      <Image
        source={{
          uri: `${API_URL}/upload/static/images/${item.imageUrl}`,
        }}
        style={styles.image}
        onLoadStart={() => setload(true)}
        onLoadEnd={() => setload(false)}
      />
      {load && <ActivityIndicator />}

      <View style={styles.bodyView}>
        <Text style={styles.body}>Medicine taken time:</Text>
        <Text style={styles.body1}>{item.time}</Text>
      </View>
      <View style={styles.bodyView1}>
        <Text style={styles.body}>Sent to - </Text>
        <Text style={styles.body1}>{item.caretakerName}</Text>
      </View>
    </View>
  );
};

const SingleImageComponent = ({item}) => {
 Logger.loggerInfo('item', item);
  const [index, setindex] = React.useState(0);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.date}>Date - {item[0].date}</Text>
      </View>
      <View style={styles.carousel}>
        <Carousel
          layoutCardOffset={9}
          data={item}
          onSnapToItem={inde => setindex(inde)}
          renderItem={({item}) => <CarouselCardItem item={item} />}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Pagination
          dotsLength={item.length}
          activeDotIndex={index}
          containerStyle={styles.pageContainer}
          dotStyle={styles.pageDot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </>
  );
};

const MedicineImages = ({}) => {
  const [imageData, setImageData] = useState([]);
  const route=useRoute();
  const medId = route.params;
  function fetchImages() {
    fetch(`${API_URL}/api/v1/medicine-images?medId=${medId}`)
      .then(resp => resp.json())
      .then(response => {
        let map = new Map();
        for (let re = 0; re < response.length; re++) {
          if (map.has(response[re].date)) {
            map.get(response[re].date).push(response[re]);
          } else {
            let newarr = [];
            newarr.push(response[re]);
            map.set(response[re].date, newarr);
          }
        }
        let Arr = [];
        map.forEach(it => Arr.push(it));
        setImageData(Arr);
      });
  }
  useFocusEffect(
    React.useCallback(() => {
      fetchImages();
      return () => {
        /* do nothing */
      };
    }, []),
  );

  return (
    <View style={styles.top}>
      {imageData.length === 0 ? (
        <View style={styles.imgView}>
          <Image
            source={require('../../../assests/images/noImages.png')}
            style={styles.img}
            resizeMode="contain"></Image>
        </View>
      ) : (
        <FlatList
          data={imageData}
          renderItem={({item}) => <SingleImageComponent item={item} />}
        />
      )}
    </View>
  );
};

export default MedicineImages;
