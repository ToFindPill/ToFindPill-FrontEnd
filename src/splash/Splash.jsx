import React, {useEffect, useCallback} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from './style';
const image = '../assets/splash.png';

const Splash = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(function () {
      console.log('Executed after 1 second');
      navigation.reset({routes: [{name: 'Home'}]});
    }, 1000);
    
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

export default Splash;
