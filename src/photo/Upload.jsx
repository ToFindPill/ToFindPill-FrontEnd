import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import {widthPercentage, heightPercentage, fontPercentage} from 'Responsive';

const ImageUploadScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setImageUri(source.uri);
      }
    });
  };

  const uploadImage = () => {
    // Handle image upload logic here
    console.log('Image uploaded:', imageUri);
    navigation.navigate('Loading');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이미지를 업로드해주세요!</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={selectImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>Click to Upload</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          uploadImage();
        }}>
        <Text style={styles.btnText}>업로드</Text>
      </TouchableOpacity>
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
  }
});

export default ImageUploadScreen;
