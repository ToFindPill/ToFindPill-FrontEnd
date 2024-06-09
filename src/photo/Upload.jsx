import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { widthPercentage, heightPercentage } from 'Responsive';

const ImageUploadScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('사용자가 이미지 선택을 취소했습니다.');
      } else if (response.error) {
        console.log('이미지 선택 오류:', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setImageUri(source.uri);
      }
    });
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('이미지를 선택하지 않았습니다', '업로드할 이미지를 선택해주세요.');
      return;
    }

    setIsLoading(true); // 업로드 시작 시 로딩 상태로 전환

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      name: 'upload.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch('http://192.168.0.166:3000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('이미지 업로드 성공:', data);
        setIsLoading(false); // 업로드 성공 시 로딩 상태 해제
        Alert.alert('업로드 성공', `메시지: ${data.message}`);
        navigation.navigate('Result', { prediction: data.prediction }); // 결과 화면으로 이동
      } else {
        console.log('업로드 실패:', data);
        setIsLoading(false); // 업로드 실패 시 로딩 상태 해제
        Alert.alert('업로드 실패', `오류: ${data.message}`);
      }
    } catch (error) {
      console.log('오류 발생:', error);
      setIsLoading(false); // 예외 발생 시 로딩 상태 해제
      Alert.alert('업로드 오류', `오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2082C9" />
          <Text style={styles.loadingText}>업로드 중...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>이미지를 업로드해주세요!</Text>
          <TouchableOpacity style={styles.uploadBox} onPress={selectImage}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
              <Text style={styles.uploadText}>업로드를 클릭하세요</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadImage}>
            <Text style={styles.btnText}>업로드</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    color: '#2082C9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 15,
  },
  uploadBox: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadText: {
    color: '#d9d9d9',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  uploadButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: heightPercentage(17),
    paddingHorizontal: heightPercentage(30),
    marginTop: heightPercentage(25),
    backgroundColor: '#2082C9',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ImageUploadScreen;
