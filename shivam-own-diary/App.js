import React, {
  useReducer,
  createContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './components/1RootStack';
import MainTabScreen from './Screens/TabBarNavigator';
import NewsModal from './Screens/NewsModal'
import LottieView from 'lottie-react-native'
const AuthContext = createContext();

// AsyncStorage.setItem('value',"Power of Fear").then(()=>{
//   alert('saved')
// })

// AsyncStorage.getItem('value').then((data)=>{
//   alert(data)
// })

// AsyncStorage.removeItem('value').then(()=>{
//   alert("deleted")
// })

export default function App() {
  const [loading, setLoading] = useState(true);

  const initialState = {
    password: null,
    userEmail: null,
    isSignedUser: false,
    isLoading: true,
  };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case 'CHECK_LOGIN':
        return {
          ...state,
          isSignedUser: true,
          isLoading: false,
        };

      case 'REGISTER':
        return {
          isSignedUser: false,

          password: action.payload.password,
          userEmail: action.payload.email,
          isLoading: false,
        };

      case 'FALSE_LOADING':
        return {
          password: null,
          userEmail: null,
          isSignedUser: false,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          isSignedUser: true,

          password: action.payload.password,
          userEmail: action.payload.email,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          isSignedUser: false,

          password: false,
          userEmail: false,
          isLoading: false,
        };
    }
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: async (email, password) => {
        try {
          const checkEmail = await AsyncStorage.getItem('email');
          const checkPassword = await AsyncStorage.getItem('password');

          if (checkEmail == null) {
            Alert.alert('error', 'Please SignUp First', [{ text: 'OK' }]);
          }

          if (checkEmail === email && checkPassword === password) {
            dispatch({ type: 'CHECK_LOGIN' });
          } else {
            Alert.alert('error', 'invalid credentials', [{ text: 'OK' }]);
          }
        } catch (e) {
          Alert.alert('Error', 'Some error occured', [{ text: 'ok' }]);
        }
      },
      signUp: async (email, password) => {
        try {
          const userEmail = await AsyncStorage.getItem('email');

          if (
            userEmail === null ||
            userEmail === undefined ||
            userEmail === ''
          ) {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            dispatch({
              type: 'REGISTER',
              payload: { password: password, userEmail: email },
            });
          } else {
            Alert.alert(
              'Error',
              'An existing account find please sign In by clicking on sign In button',
              [{ text: 'Okay' }]
            );
          }
        } catch (e) {
          alert('Some error occured');
        }
      },

      logOut: async () => {
        alert('Log out button pressed');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');

        dispatch({ type: 'FALSE_LOADING' });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');

      alert(`${email} ${password}`)

      if (email != null) {
        dispatch({ type: 'CHECK_LOGIN' });
        // alert("if")
      } else {
        dispatch({ type: 'FALSE_LOADING' });
        // alert("else")
      }
    }, 1200);
  }, []);
  
  

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView source={require('./animation/19361-newsletter-prueba.json')}  autoPlay loop />
      </View>
    );
  } 
// {state.isSignedUser ? <MainTabScreen /> : <RootStackNavigator />}
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
       {state.isSignedUser ? <MainTabScreen /> : <RootStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
// 3487cc79ed744ebabcda12345796ea90

export { AuthContext };
