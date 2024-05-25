import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const medications = [
  { id: '1', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
  { id: '2', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
  { id: '3', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
  { id: '4', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
  { id: '5', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
  { id: '6', name: '가나메드정 Ganamed Tab. 외 3', description: '기타의 소화기관용약(239)', time: '09:00AM' },
];

const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const App = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const formatDate = (date) => {
    const month = monthNamesShort[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <View style={styles.datePickerWrapper}>
          <DatePicker
            date={fromDate}
            onDateChange={setFromDate}
            mode="date"
            textColor="black"
            style={styles.datePicker}
            locale="en"
            minimumDate={new Date('2000-01-01')}
            maximumDate={new Date('2100-12-31')}
          />
          <Text style={styles.dateText}>{formatDate(fromDate)}</Text>
        </View>
        <Text style={styles.dateRangeSeparator}>~</Text>
        <View style={styles.datePickerWrapper}>
          <DatePicker
            date={toDate}
            onDateChange={setToDate}
            mode="date"
            textColor="black"
            style={styles.datePicker}
            locale="en"
            minimumDate={new Date('2000-01-01')}
            maximumDate={new Date('2100-12-31')}
          />
          <Text style={styles.dateText}>{formatDate(toDate)}</Text>
        </View>
      </View>
      <TextInput
        label="약제 정보 검색"
        mode="outlined"
        style={styles.searchBar}
      />
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.medicationImage}
            />
            <View style={styles.medicationInfo}>
              <Text style={styles.medicationName}>{item.name}</Text>
              <Text style={styles.medicationDescription}>{item.description}</Text>
              <Text style={styles.medicationTime}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  datePickerWrapper: {
    flex: 1,
    alignItems: 'center',
    transform: [{ scale: 0.8 }],
  },
  datePicker: {
    width: 150,
    height: 100,
  },
  dateRangeSeparator: {
    marginHorizontal: 8,
    fontSize: 18,
  },
  dateText: {
    marginTop: 8,
    fontSize: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  medicationImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicationDescription: {
    fontSize: 14,
    color: '#555',
  },
  medicationTime: {
    fontSize: 14,
    color: '#999',
  },
});

export default App;
