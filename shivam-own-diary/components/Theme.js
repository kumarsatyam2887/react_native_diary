import * as React from 'react';
import { View, StyleSheet, Button, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorPicker,TriangleColorPicker} from "react-native-color-picker"
import { AuthContext } from '../App';
import HTML from 'react-native-render-html'

export default ({ navigation }) => {
   const {setThemeColorFunc,setTextColorFunc,getTextColor,getThemeColor} = React.useContext(AuthContext)

  const [themeColor, setThemeColor] = React.useState(getTextColor);
  const [textColor, setTextColor] = React.useState(getThemeColor);
 
 
  const textColorChanger = (color) => {
    setTextColor(color.hex);
   // setTextColorFunc(color.hex)
  };

  const themeColorChanger = (color) => {
    setThemeColor(color.hex);
   // setThemeColorFunc(color.hex)
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View
        style={{ backgroundColor: 'black', padding: 12, flexDirection: 'row' }}>
        <View style={{ paddingHorizontal: 12 }}>
          <Icon.Button
            name="arrow-back"
            size={25}
            backgroundColor="black"
            onPress={back}></Icon.Button>
        </View>
        <View styles={{justifyContent:"center",alignItems:"center"}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'system-ui',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Color and Scheme
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: themeColor, padding: 22 }}>
        <View style={{ paddingVertical: 12, paddingHorizontal: 24 }}>
          <Text style={styles.textView}>Theme</Text>
        </View>

        <View
          style={{
            marginVerical: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
       
        </View>

        <View style={{ paddingVertical: 12, paddingHorizontal: 24 }}>
          <Text style={styles.textView}>Text Styling</Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <View
              style={{ width: '100%', backgroundColor: 'white', padding: 12 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontSize: 17,
                  color: textColor,
                }}>
                Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                tempor...
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
          }}>
       <TouchableOpacity>
        <TriangleColorPicker color={textColor} onChangeColor={textColorChanger} />}}
       </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
    marginVerical: 12,
  },
});
