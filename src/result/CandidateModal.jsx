import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const CandidateModal = ({ isVisible, candidates, selectedModalDrug, onSelect, onClose, onConfirm }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailedDrug, setDetailedDrug] = useState(null);

  const handleShowDetail = (drug) => {
    setDetailedDrug(drug);
    setShowDetail(true);
  };

  const handleBackToList = () => {
    setShowDetail(false);
    setDetailedDrug(null);
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {showDetail ? (
            <View style={styles.detailContainer}>
              <TouchableOpacity onPress={handleBackToList}>
                <Text style={styles.backButton}>뒤로 가기</Text>
              </TouchableOpacity>
              <Image source={{ uri: detailedDrug.image }} style={styles.detailImage} />
              <Text style={styles.detailName}>{detailedDrug.name}</Text>
              <Text style={styles.detailInfo}>성분: {detailedDrug.ingredient}</Text>
              <Text style={styles.detailInfo}>첨가제: {detailedDrug.additives}</Text>
              <Text style={styles.detailInfo}>도핑금지 정보: {detailedDrug.dopingInfo}</Text>
              <Text style={styles.detailInfo}>제조사: {detailedDrug.manufacturer}</Text>
            </View>
          ) : (
            <FlatList
              data={candidates}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalItem, selectedModalDrug?.id === item.id && styles.selectedModalItem]}
                  onPress={() => onSelect(item)}
                >
                  <Text style={styles.modalItemTitle}>TOP {item.rank}</Text>
                  <View style={styles.modalItemContent}>
                    <Image source={{ uri: item.image }} style={styles.modalImage} />
                    <View style={styles.modalInfo}>
                      <Text style={styles.modalPercentage}>{item.percentage}</Text>
                      <Text style={styles.modalName}>{item.name}</Text>
                      <Text style={styles.modalDescription}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.modalDetailButton} onPress={() => handleShowDetail(item)}>
                      <Text style={styles.modalDetailButtonText}>자세히</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.scrollViewContainer}
            />
          )}
          <View style={styles.modalButtonContainer}>
            <Button title="취소" onPress={onClose} color="#aaa" />
            <Button title="확인" onPress={onConfirm} color="#007BFF" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    maxHeight: screenHeight * 0.9,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  modalItem: {
    // marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  selectedModalItem: {
    backgroundColor: '#E0F7FA',
  },
  modalItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 8,
  },
  modalItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  modalInfo: {
    flex: 1,
  },
  modalPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  modalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
  },
  modalDetailButton: {
    marginLeft: 16,
    backgroundColor: '#1E88E5',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  modalDetailButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
  },
  detailContainer: {
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 16,
  },
  detailImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  detailName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default CandidateModal;
