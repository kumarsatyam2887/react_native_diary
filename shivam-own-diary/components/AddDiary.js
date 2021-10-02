import * as React from 'react';
import { View, StyleSheet, Button,Text,TextInput,Alert } from 'react-native';
import {RichToolbar} from 'react-native-pell-rich-editor'
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../App'

export default ({navigation})=>{

const [title,setTitle] = React.useState("")
const [desc,setDesc] = React.useState("")

const { saveDiaryIntoDevice} = React.useContext(AuthContext)

const open = ()=>{
  navigation.goBack()
}

const saveDiary = ()=>{
  if(title===""){
      Alert.alert("Message","please add a title..",[{text:"OK"}])
      return ;
  }

   if(desc===""){
      Alert.alert("Message","please add some content..",[{text:"OK"}])
      return;
  }
 alert("Saving")
  saveDiaryIntoDevice(title,desc)
}



  const richText = React.useRef();

  return(
  <View style={{flex:1}}>
  
    <View style={{flexDirection:"row",backgroundColor:"black",flex:0.1,paddingHorizontal:20,alignItems:"center",justifyContent:"space-between"}}>
      <View>
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Add Diary</Text>
      </View>

      <View style={{flexDirection:"row"}}>
            <Icon.Button
              name="ios-wallet"
              size={25}
              backgroundColor="black"
              onPress={saveDiary}></Icon.Button>
                  <Icon.Button
              name="ios-delete"
              size={25}
              backgroundColor="black"
              onPress={open}></Icon.Button>
      </View>

    </View>



      <View style={{ flex: 0.9, backgroundColor: "orangered", padding: 10 }}>
        <View style={{ backgroundColor: "#fff", paddingVertical: 6, paddingHorizontal: 12, flexDirection: "row", borderRadius: 4 }}>
          <Icon name="ios-home" size={24} />
          <View style={{ paddingLeft: 14, flex: 1 }}>
            <TextInput placeholder="Add title ..." placeholderColor="gray" value={title} onChangeText={(e)=>setTitle(e)}/>
          </View>
        </View>


        <View style={{ backgroundColor: "#fff", marginVertical: 26, paddingVertical: 12, flexDirection: "row", borderRadius: 4 }}>

          <View style={{ paddingLeft: 14, flex: 1 }}>
            <TextInput placeholder="Start Typing Here" placeholderColor="gray" multiline={true} style={styles.textInput} numberOfLines={25} value={desc} onChangeText={e=>setDesc(e)}/>
          </View>
        </View>

    </View>

  </View>
  )
}


const styles = StyleSheet.create({
    textInput:{
      textAlignVertical:"top"
    }
})