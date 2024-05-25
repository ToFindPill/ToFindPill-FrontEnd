import React from 'react';
import {StyleSheet} from 'react-native';
// import {responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveFontSize} from 'react-native-responsive-dimensions';
import {widthPercentage, heightPercentage, fontPercentage} from 'Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuIcon: {
    marginRight: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#7D9ABA',
    marginTop: 20,
  },
  searchInput: {
    color: '#7D9ABA',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  sectionTitleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#CAD5E2',
    marginBottom: 10,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // elevation: 5,
  },
  img: {
    height: heightPercentage(80),
    marginBottom: heightPercentage(10),
  },
  icon: {
    height: heightPercentage(30),
    width: widthPercentage(30),
    marginRight: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default styles;
