import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import DrugItem from './DrugItem'; // Adjust the import path as necessary
import CandidateModal from './CandidateModal'; // Adjust the import path as necessary

const mainDrugResults = [
  {
    id: '1',
    percentage: '64%',
    name: '가나메드정 Ganamed Tab.',
    description: '기타의 소화기관용약(239)',
    image: 'https://via.placeholder.com/50',
    candidates: [
      {
        id: '1-1',
        rank: 1,
        percentage: '62%',
        name: '가나메드정 Ganamed Tab.',
        description: '기타의 소화기관용약(239)',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 A',
        additives: '첨가제 정보 A',
        dopingInfo: '도핑금지 정보 A',
        manufacturer: '제조사 정보 A',
      },
      {
        id: '1-2',
        rank: 2,
        percentage: '5%',
        name: '뉴프람정5mg Newpram Tab.',
        description: '정신신경용제(117)',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 B',
        additives: '첨가제 정보 B',
        dopingInfo: '도핑금지 정보 B',
        manufacturer: '제조사 정보 B',
      },
      {
        id: '1-3',
        rank: 3,
        percentage: '3%',
        name: '유타렌정 Utaren Tab.',
        description: '소화성궤양용제',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 B',
        additives: '첨가제 정보 B',
        dopingInfo: '도핑금지 정보 B',
        manufacturer: '제조사 정보 B',
      },
      {
        id: '1-4',
        rank: 4,
        percentage: '1%',
        name: '에스브론캡슐 S bron Cap.',
        description: '기타의 호흡기관용약(229)',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 B',
        additives: '첨가제 정보 B',
        dopingInfo: '도핑금지 정보 B',
        manufacturer: '제조사 정보 B',
      },
    ],
  },
  {
    id: '2',
    percentage: '89%',
    name: '유타렌정 Utaren Tab.',
    description: '소화성궤양용제',
    image: 'https://via.placeholder.com/50',
    candidates: [
      {
        id: '2-1',
        rank: 1,
        percentage: '79%',
        name: '유타렌정 Utaren Tab.',
        description: '소화성궤양용제',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 C',
        additives: '첨가제 정보 C',
        dopingInfo: '도핑금지 정보 C',
        manufacturer: '제조사 정보 C',
      },
      {
        id: '2-2',
        rank: 2,
        percentage: '21%',
        name: '다른 약물 B',
        description: '기타의 소화기관용약(239)',
        image: 'https://via.placeholder.com/50',
        ingredient: '성분 정보 D',
        additives: '첨가제 정보 D',
        dopingInfo: '도핑금지 정보 D',
        manufacturer: '제조사 정보 D',
      },
    ],
  },
  // Add more main drugs as necessary
];

const DrugRecognitionResultsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMainDrugId, setSelectedMainDrugId] = useState(null);
  const [selectedModalDrug, setSelectedModalDrug] = useState(null);
  const [mainDrugs, setMainDrugs] = useState(mainDrugResults);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelectMainDrug = (drugId) => {
    setSelectedMainDrugId(drugId);
    setSelectedModalDrug(null); // Reset the modal selection
    toggleModal();
  };

  const handleSelectModalDrug = (drug) => {
    setSelectedModalDrug(drug);
  };

  const handleConfirmSelection = () => {
    const updatedMainDrugs = mainDrugs.map((drug) =>
      drug.id === selectedMainDrugId ? { ...drug, ...selectedModalDrug } : drug
    );
    setMainDrugs(updatedMainDrugs);
    toggleModal();
  };

  const selectedDrug = mainDrugs.find(drug => drug.id === selectedMainDrugId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.mainImage} />
      <Text style={styles.resultSummary}>총 {mainDrugs.length}개의 약물 인식</Text>
      <FlatList
        data={mainDrugs}
        renderItem={({ item }) => (
          <DrugItem
            item={item}
            onPress={() => handleSelectMainDrug(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <CandidateModal
        isVisible={isModalVisible}
        candidates={selectedDrug ? selectedDrug.candidates : []}
        selectedModalDrug={selectedModalDrug}
        onSelect={handleSelectModalDrug}
        onClose={toggleModal}
        onConfirm={handleConfirmSelection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  resultSummary: {
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default DrugRecognitionResultsScreen;
