import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      navigation.navigate('Result');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
      <Text style={styles.title}>약물을 인식하고 있어요!</Text>
      <Text style={styles.subtitle}>조금만 기다려주세요 :)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#003366',
    textAlign: 'center',
  },
});

export default LoadingScreen;
