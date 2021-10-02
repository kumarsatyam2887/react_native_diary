import React, { useEffect, createContext, useState, useMemo } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Theme from './components/Theme';
import LottieView from 'lottie-react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as RNFS from 'react-native-fs'
const Drawer = createDrawerNavigator();

import HomeScreen from './components/HomeScreen';
const AuthContext = createContext();

const comp = () => {
  return (
    <View>
      <Text>Hello </Text>
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [storagePermission, setStoragePermission] = useState(false);

  const PermisssionCheck = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ).then((isPermitted) => {
      if (isPermitted) {
        setStoragePermission(true);
      } else {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'Allow Shivam Diary To Give Storage Permission',
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        ).then((data) => {
          setStoragePermission(true);
        });
      }
    });
  };

  const authContext = useMemo(
    () => ({
      setThemeColorFunc: async (color) => {
        await AsyncStorage.setItem('themeColor', color);
      },

      setTextColorFunc: async (color) => {
        await AsyncStorage.setItem('textColor', color);
      },

      saveDiaryIntoDevice: async (title, desc) => {
       
        if(!storagePermission){
          PermisssionCheck()
        }
      },
      getTextColor: () => {
        AsyncStorage.getItem('textColor').then((color) => {
          alert(color);
          return color;
        });
      },
      getThemeColor: () => {
        AsyncStorage.getItem('themeColor').then((color) => {
          alert(color);
          return color;
        });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      try {
        let textColor = await AsyncStorage.getItem('textColor');
        let themeColor = await AsyncStorage.getItem('themeColor');
        alert(`${textColor} ${themeColor}`);

        if (textColor === null || themeColor === null) {
          await AsyncStorage.setItem('textColor', '#000');
          await AsyncStorage.setItem('themeColor', '#E8893C');
        }
        setLoading(false);
      } catch (err) {}
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading ....</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeDrawer">
          <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
          <Drawer.Screen name="SupportScreen" component={comp} />
          <Drawer.Screen name="Theme" component={Theme} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export { AuthContext };

const styles = StyleSheet.create({});
