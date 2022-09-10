import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Main_profile = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Container2}>
        <Text style={styles.Top}> 프로필 </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("ProfileStacks", { screen: "Profile_setting"})}
        style={styles.textContainerss}
      ></TouchableOpacity>    
      </View>

      <View style={styles.Middle}>
      <FontAwesome name="user-circle-o" size={70} color="black" />
      <View style={styles.Middle2}>

      <Text> 학번 : 
      <TouchableOpacity onPress={() => navigation.navigate("개인정보 수정")}> 
      <Feather style={styles.Edit} name="edit-3" size={24} color="black" /> 
      </TouchableOpacity> 
      </Text>  
      <Text > 이름 : </Text>
      <Text> 이메일 : </Text>
      </View>
      </View>
      
      <View style={styles.Middle3}>
      <Text style={styles.fontFamily}>내 게시글 </Text>
      <TouchableOpacity onPress={() => navigation.navigate("내 게시글")} >
      <Text> 제목 </Text>
      </TouchableOpacity>

      <View style={styles.Middle3}>
      <Text style={styles.fontFamily}>내 채팅방 </Text>
      <TouchableOpacity onPress={() => navigation.navigate("내 채팅방")} >
      <Text> 제목 </Text>
      </TouchableOpacity>

      <View style={styles.Middle3}>
      <TouchableOpacity onPress={() => navigation.navigate("이용 제한 내역")} >
      <Text style={styles.fontFamily}>이용 제한 내역 </Text> 
      </TouchableOpacity>
      </View> 

      </View> 
      </View>
    </View>
  )
}

export default Main_profile

const styles = StyleSheet.create({

  Container: {
  backgroundColor:"000000",
   marginLeft:30,
    
  },

  Container2:{
    flexDirection: 'row', 
  },


  Top: {
    marginTop: 30,
    marginLeft:110,
    fontSize: 30,
    fontFamily: 'NanumGothicBold',
  },

  Middle: {
    marginTop: 80, 
    flexDirection: 'row', 
    fontFamily: 'NanumGothicBold',
    
  },

  Middle2: {
   justifyContent:"center",
   marginLeft: 10,
   fontFamily: 'NanumGothicBold',
  
  },

  Middle3:{
    marginTop:50,
  },

  fontFamily: {
    margintop:30,
    fontFamily: 'NanumGothicBold',
    fontSize:20,
  },
  

  Edit:{
  marginLeft:220,
  },

})