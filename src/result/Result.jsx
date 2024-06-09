import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DrugItem from './DrugItem';

const DrugRecognitionResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { prediction } = route.params;
  const [mainDrugs, setMainDrugs] = useState([]);

  useEffect(() => {
    if (prediction) {
      const formattedDrugs = prediction.results.map((result) => ({
        id: result.id,
        percentage: result.percentage || '0%',
        name: result.name,
        description: result.description,
        image: result.image || 'https://via.placeholder.com/50',
        candidates: result.candidates.map((candidate) => ({
          id: candidate.id,
          rank: candidate.rank,
          percentage: candidate.percentage || '0%',
          name: candidate.name,
          description: candidate.description,
          image2: candidate.image || 'https://via.placeholder.com/50',
          ingredient: candidate.material,
          additives: candidate.additives,
          dopingInfo: candidate.dopingInfo,
          manufacturer: candidate.company,
        })),
      }));
      setMainDrugs(formattedDrugs);
    } else {
      Alert.alert('오류', '예측 결과를 받아오지 못했습니다.');
    }
  }, [prediction]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: prediction.image_paths[prediction.image_paths.length - 1] }} style={{ width: '100%', height: 200, resizeMode: "contain", backgroundColor: 'black'}} />
      <Text style={styles.resultSummary}>총 {mainDrugs.length}개의 약물 인식</Text>
      <FlatList
        data={mainDrugs}
        renderItem={({ item, index }) => (
          <DrugItem
            item={item}
            image={prediction.image_paths}
            i={index}
          />)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultSummary: {
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default DrugRecognitionResultsScreen;
