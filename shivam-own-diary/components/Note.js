import * as React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';



export default (props)=>  {
  return(
       <TouchableOpacity style={styles.notes}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Image
              style={styles.image}
              source={require('../assets/snack-icon.png')}></Image>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>15 MAR</Text>
          </View>

          <View style={{ marginVertical: 12, marginHorizontal: 2 }}>
            <Text style={{ fontWeight: 'bold', fontFamily: 'system-ui' }}>
              {props.title}
            </Text>
          </View>
        </TouchableOpacity>


  )
}

const styles = StyleSheet.create({
  notes: {
    backgroundColor: '#feefef',
    borderWidth: 0.5,
    opacity: 1,
    width: '40%',
    justifyContent: 'center',

    paddingHorizontal: 5,
    borderColor: 'red',
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 12,
  
    height: 120,
  },
  image: {
    width: 40,
    resizeMode: 'stretch',
    height: 40,
  },
});