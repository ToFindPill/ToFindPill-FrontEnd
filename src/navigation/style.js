import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, widthScreen} from 'Responsive';
export const sliderWidth = widthScreen;
export const itemWidth = widthPercentage(400);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    height: heightPercentage(50),
    shadowColor: 'transparent',
    borderBottomWidth: 1,
  },
  titleContainer: {
    height: heightPercentage(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    height: heightPercentage(70),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backBtn: {
    width: widthPercentage(25),
    height: heightPercentage(25),
  },
  headerMyBtn: {
    marginRight: widthPercentage(31),
    alignItems: 'center',
  },
});

export default styles;
