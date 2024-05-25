import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import styles from 'home/style';
import {Camera} from 'react-native-vision-camera';

import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { log } from '../../node_modules 2/async';
// import Icon from 'react-native-vector-icons/Ionicons';
const Home = ({navigation, route}) => {
  // const navigation = useNavigation();

  const checkPermission = async () => {
    // 카메라 권한 확인
    console.log('asdf111');
    const cameraPermission = await Camera.getCameraPermissionStatus();
    console.log('asdf', cameraPermission);
    switch (cameraPermission) {
      case 'granted':
        // 카메라 권한이 있을때 실행할 로직
        console.log('authorized');
        navigation.navigate('Upload');
        break;
        
      case 'not-determined':
        // 아직 권한 요청을 하지 않은 상태로 새롭게 권한 요청하기
        const newCameraPermission = await Camera.requestCameraPermission();

        if (newCameraPermission === 'authorized') {
          // 카메라 권한이 있을때 실행할 로직
          console.log('authorized');
          navigation.navigate('CameraScreen')
        } else if (newCameraPermission === 'denied') {
          // 권한 요청을 했지만 거부됐을때 실행할 로직
          // ex) 설정으로 이동, 권한이 없으면 카메라 실행할 수 없다는 알림창 등등
          console.log('카메라 실행할 수 없다');
          await Linking.openSettings();
        }
        break;
        
      case 'denied':
        console.log('denied');
        // 권한 요청을 했지만 거부됐을때 실행할 로직
        // ex) 설정으로 이동, 권한이 없으면 카메라 실행할 수 없다는 알림창 등등
        await Linking.openSettings();
        break;
    }
  };
  
  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1, width: '100%', height: '100%'}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TO FIND PILL</Text>
          {/* <Icon name="menu" size={30} color="#000" style={styles.menuIcon} /> */}
        </View>
        <View style={styles.searchBar}>
          <Image
            resizeMode={'contain'}
            style={styles.icon}
            source={require('../assets/search.png')}
          />
          {/* <Icon name="search" size={20} color="#7D9ABA" /> */}
          <TextInput placeholderTextColor={'#7D9ABA'}  style={styles.searchInput} placeholder="약제 정보 검색" />
        </View>
        <View style={styles.sectionTitleContainer}>
          {/* <Text style={styles.sectionTitle}>약제 이미지 검색</Text> */}
        </View>
        <TouchableOpacity onPress={() => checkPermission()} style={styles.card}>
          <Image
            resizeMode={'contain'}
            style={styles.img}
            source={require('../assets/upload.png')}
          />
          <Text style={styles.cardText}>약제 이미지 검색</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('History')} style={styles.card}>
          <Image
            resizeMode={'contain'}
            style={styles.img}
            source={require('../assets/clock.png')}
          />
          <Text style={styles.cardText}>히스토리</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Home;
