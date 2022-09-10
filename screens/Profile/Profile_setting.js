import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';

// 프로필 설정

const Profile_setting = ({navigation}) => {
  return (
    <View style={styles.Container}>
    <View style={styles.Middle3}>
    <Text style={styles.fontFamily}>서비스 </Text>
    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 앱버전 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 공지사항 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 서비스 이용 약관 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 개인정보 처리방침 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 오픈소스 라이선스 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 커뮤니티 이용규칙 </Text>
    </TouchableOpacity>

    <View style={styles.Middle3}>
    <Text style={styles.fontFamily}>문의 및 지원 </Text>
    <TouchableOpacity onPress={() => navigation.navigate("")} >
    <Text> 문의하기 </Text>
    </TouchableOpacity>
    </View> 
    </View>
  </View>
  )
}

export default Profile_setting

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
      marginTop:30,
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