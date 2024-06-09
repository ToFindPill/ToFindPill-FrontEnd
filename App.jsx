import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import styles from 'navigation/style';
import Home from 'home/Home';
import Splash from 'splash/Splash';
import History from 'history/History';
import Result from 'result/Result';
import CameraScreen from 'photo/CameraScreen';
import Upload from 'photo/Upload';
import Loading from 'Loading';
import DrugDetailScreen from 'detail/DrugDetailScreen';
import Login from 'login/Login';
import Signup from 'login/Signup';

const Stack = createStackNavigator();
function App() {
  const navigationRef = React.createRef();
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            safeAreaInsets: {top: 0, bottom: 0},
            headerStyle: styles.header,
            headerTintColor: 'black',
            headerTitleStyle: styles.mainheaderText,
          }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{
              title: '로그인',
              headerShown: false,
              headerTitleAlign: 'center',
              headerTitleStyle: styles.mainheaderText,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              title: '회원가입',
              headerShown: false,
              headerTitleAlign: 'center',
              headerTitleStyle: styles.mainheaderText,
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen
            name="Detail"
            component={DrugDetailScreen}
            options={{title: '약물 상세정보'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
