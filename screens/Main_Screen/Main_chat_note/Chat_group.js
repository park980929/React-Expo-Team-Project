import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Chat_group = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("글작성")} style={styles.icon}>
      <AntDesign name="pluscircle" size={50} color="black" />
      </TouchableOpacity>    
    </View>
  )
}

export default Chat_group

const styles = StyleSheet.create({
  icon: {
    marginLeft: 335,
    marginTop: 590,
  },  
})