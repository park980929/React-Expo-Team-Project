import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';

// 프로필 수정 

const Profile_edit = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Middle}>
      <FontAwesome name="user-circle-o" size={70} color="black" />
      <View style={styles.Middle2}>

      <Text> 학번 : </Text>  
      <Text > 이름 : </Text>
      <Text> 이메일 : </Text>
      </View>
      </View>
      
      <View style={styles.Middle3}>
      <Text style={styles.fontFamily}>계정 </Text>
      <TouchableOpacity onPress={() => navigation.navigate("")} >
      <Text> 비밀번호 변경 </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")} >
      <Text> 이메일 변경 </Text>
      </TouchableOpacity>

      <View style={styles.Middle3}>
      <Text style={styles.fontFamily}>기 타 </Text>
      <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
      <Text> 로그아웃</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")} >
      <Text> 회원탈퇴 </Text>
      </TouchableOpacity>
     

      </View> 
      <TouchableOpacity
      style={styles.customBtn}
      onPress={() => navigation.navigate("Profile")} >
      <Text style={{ color: '#000000', fontSize: 24, fontFamily:'NanumGothicBold' }}>저장</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile_edit

const styles = StyleSheet.create({
  customBtn:{
    backgroundColor: '#D9D9D9',
    padding: 15,
    margin: 80,
    marginTop: 250,
    borderRadius: 10,
    alignItems:"center"
  },

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
      marginTop: 40, 
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