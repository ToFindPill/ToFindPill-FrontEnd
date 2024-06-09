import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import CandidateModal from './CandidateModal';

const DrugItem = ({ item , image, i }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMainDrugId, setSelectedMainDrugId] = useState(i+'-1');
  const [selectedModalDrug, setSelectedModalDrug] = useState(item.candidates[0]);
  const data = item.candidates;
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const handleSelectMainDrug = (drugId) => {
  //   setSelectedMainDrugId(drugId);
  //   setSelectedModalDrug(null); // Reset the modal selection
  // };

  const handleSelectModalDrug = (drug) => {
    setSelectedModalDrug(drug);
  };

  const handleConfirmSelection = () => {
    // 선택된 후보 약물로 대체하는 로직
    // item.name = selectedModalDrug.name;
    // item.description = selectedModalDrug.description;
    // item.image = selectedModalDrug.image;
    // const updatedMainDrugs = data.map((drug) =>
    //   drug.id === selectedMainDrugId ? { ...drug, ...selectedModalDrug } : drug
    // );
    // setSelectedModalDrug(updatedMainDrugs)
    toggleModal();
  };
  useEffect(() => {
    console.log(data, image, i)
  }, []);


  return (
    <View style={styles.drugItem}>
      <Image source={{ uri: image[i] }} style={styles.drugImage} />
      <View style={styles.drugInfo}>
        <Text style={styles.percentage}>{selectedModalDrug.percentage}</Text>
        <Text style={styles.name}>{selectedModalDrug.name}</Text>
        <Text style={styles.description}>{selectedModalDrug.description}</Text>
        <TouchableOpacity style={styles.resultButton} onPress={toggleModal}>
          <Text style={styles.resultButtonText}>다른 인식 결과  ➔</Text>
        </TouchableOpacity>
      </View>


      <CandidateModal
        isVisible={isModalVisible}
        candidates={data}
        selectedModalDrug={selectedModalDrug}
        onSelect={handleSelectModalDrug}
        onClose={toggleModal}
        onConfirm={handleConfirmSelection}
      />
    </View>
  );
};

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  candidateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
  },
  candidateImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  candidateName: {
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#1E88E5',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DrugItem;
