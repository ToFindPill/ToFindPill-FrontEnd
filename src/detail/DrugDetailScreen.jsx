import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DrugDetailScreen = ({ route }) => {
  const { drug } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: drug.image }} style={styles.mainImage} />
      <Text style={styles.title}>TOP {drug.rank} 약물 상세 정보</Text>
      <Text style={styles.percentage}>{drug.percentage}</Text>
      <Text style={styles.name}>{drug.name}</Text>
      <Text style={styles.description}>{drug.description}</Text>
      <Text style={styles.sectionTitle}>성분 / 함량</Text>
      <Text style={styles.text}>{drug.ingredient}</Text>
      <Text style={styles.sectionTitle}>첨가제</Text>
      <Text style={styles.text}>{drug.additives}</Text>
      <Text style={styles.sectionTitle}>도핑금지 약물정보</Text>
      <Text style={styles.text}>{drug.dopingInfo}</Text>
      <Text style={styles.sectionTitle}>제조 / 수입사</Text>
      <Text style={styles.text}>{drug.manufacturer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default DrugDetailScreen;
