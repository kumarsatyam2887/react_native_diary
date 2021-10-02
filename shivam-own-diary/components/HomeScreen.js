import * as React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeStackScreen = createStackNavigator();
import NoteScreen from './NoteScreen'
import AddDiary from './AddDiary'



export default ({navigation}) => {
const open = ()=>{
  navigation.openDrawer()
}

  return (
    <HomeStackScreen.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTintStyle: {
          fontWeight: 'bold',
        },

   

      }}>
      
      
        <HomeStackScreen.Screen
        name="Home"
        component={NoteScreen}
        options={{
          title: 'Shivam Diary',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="black"
              onPress={open}></Icon.Button>
          ),
        }}
      />
      
        <HomeStackScreen.Screen
         
        name="Add Diary"
        component={AddDiary}
        options={{
          title: 'Shivam Diary',
          headerShown:false
         
        }}
      />
      </HomeStackScreen.Navigator>
  );
};
