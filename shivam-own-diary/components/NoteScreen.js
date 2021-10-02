import * as React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Note from './Note'



export default ({navigation}) => {
const Add = ()=>{
  
  navigation.push('Add Diary')
}

  return (
  
  
   <View style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex:1
        }}>

       <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex:1
        }}>
    
    
        <Note title="Shivam the great"/>
     
          <View style={styles.button}>
          <Button title="+" style={{width:50}} onPress={Add}/>
          </View>

      </View>
</View>
    
   
  );

};
// #feefef
// #eff0fb

// #e7f4df
const styles = StyleSheet.create({
    button:{
     
   
     
      position:"absolute",
      bottom:10,
      right:10,
     
     fontWeight:"bold"
    }
});
