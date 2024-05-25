import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DrugItem = ({ item, onPress }) => (
  <View style={styles.drugItem}>
    <Image source={{ uri: item.image }} style={styles.drugImage} />
    <View style={styles.drugInfo}>
      <Text style={styles.percentage}>{item.percentage}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.tagContainer}>
        <View style={styles.tag}><Text style={styles.tagText}>전문</Text></View>
        <View style={styles.tag}><Text style={styles.tagText}>단일</Text></View>
      </View>
      <TouchableOpacity style={styles.resultButton} onPress={onPress}>
        <Text style={styles.resultButtonText}>다른 인식 결과  ➔</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  drugItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  drugImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  drugInfo: {
    flex: 1,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#E3F2FD',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#1E88E5',
  },
  resultButton: {
    marginTop: 8,
    backgroundColor: '#1E88E5',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  resultButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default DrugItem;
