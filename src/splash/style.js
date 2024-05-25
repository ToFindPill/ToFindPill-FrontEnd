import {StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage} from 'Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingBottom: heightPercentage(40),
  },
});

export default styles;
