import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Main_profile = ({navigation}) => {
  return (
    <View style={styles.Container}>
    <Text style={styles.Top}> 프로필 
    <View style={styles.settings}>
    <TouchableOpacity onPress={() => navigation.navigate("프로필 설정")}> 
    <MaterialIcons name="settings" size={40} color="black" /> 
    </TouchableOpacity>
    </View>
    </Text> 
    


    <View style={styles.Profile}> 
    <FontAwesome name="user" size={50} color="black" />
    
    <Text> 학번 </Text>
    <Text> 이름 </Text>
    <Text> 이메일 </Text>
    <TouchableOpacity onPress={() => navigation.navigate("개인정보 수정")} style={styles.settings}> 
    <Feather name="edit-3" size={24} color="black" />
    </TouchableOpacity>
    </View>

    
    <View style={styles.Container}></View>

    <Text style={styles.Middle1}>내 게시글</Text>
    <TouchableOpacity onPress={() => navigation.navigate("내 게시글")} >
    <Text style={styles.Middle2}> 제목 </Text>
      </TouchableOpacity>

      <Text style={styles.Middle1}>내 채팅방</Text>
    <TouchableOpacity onPress={() => navigation.navigate("내 채팅방")} >

    <Text style={styles.Middle2}> 제목 </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("이용 제한 내역")} >

    <Text style={styles.Middle1}> </Text>
    <Text style={styles.Middle2}> 이용 제한 내역 </Text>
      </TouchableOpacity>


      {/* <TouchableOpacity
      style={styles.customBtn}
      onPress={()=> firebase.auth().signOut()}
      >
      <Text style={{ color: '#000000', fontSize: 24, fontFamily:'NanumGothicBold' }}>로그아웃</Text>
      </TouchableOpacity> */}
      
    </View>
  )
}

export default Main_profile

const styles = StyleSheet.create({
  // customBtn:{
  //   backgroundColor: '#D9D9D9',
  //   padding: 15,
  //   margin: 20,
  //   marginTop: 550,
  //   borderRadius: 10,
  //   alignItems:"center"
  // },
  Top: {
    marginTop: 15,
    justifyContent:"center",
    alignItems:"center", 
    
  },

  Container: {
    backgroundColor:"000000",
  },

  Container2: {
    backgroundColor:"000000",
    marginTop: 30,
    alignItems:"center", 
    flexDirection: 'center',
  },

  textContainerss: {
    height:50,
    borderColor:'#999999',
    backgroundColor:"#FFFFFF",
    borderWidth:2,
    borderRadius:10,
    margin:10,
    
  },
  settings:{
    justifyContent:"space-around",
      flexDirection: 'row',
  },

  Middle1:{
    fontFamily: 'NanumGothicBold',
    marginLeft:30,
    fontSize:20,
    marginTop:50,
  },

  Middle2:{
    marginLeft:30,
    marginTop:5,
    fontSize:15,
  },

  Profile: {
    marginLeft:30,
    marginTop:30,
    alignItems:"center", 
    flexDirection: 'row',
    
  },

  Top: {
    fontSize:30,
    marginLeft: 15,
    marginTop:30,
    fontFamily: 'NanumGothicBold',
  },
})
