import React from "react";
import { View, Text, TouchableOpacity,StyleSheet  } from "react-native";
import firebase from 'firebase/app';
import "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import MainSchool from "./Main_root_note/MainSchool";


const Main_board = ({navigation}) => {
  return (
    <View>
    <View style={styles.Container}>
    <Text style={styles.Top}>게시판</Text>
      <View style={styles.menuContainer} horizontal ={true}>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate("자유 게시판")} style={styles.textContainer}>
      <Text style={styles.textStyle}> 자유 </Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("공모전 게시판")} style={styles.textContainer}>
      <Text style={styles.textStyle}>공모전</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate("동아리 게시판")} style={styles.textContainer}>
      <Text style={styles.textStyle}>동아리</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("취업 게시판")} style={styles.textContainer}>
      <Text style={styles.textStyle}> 취업</Text>
      </TouchableOpacity>

      </View>
      </View>
  </View>
);
}

export default Main_board

const styles = StyleSheet.create({

  Container: {
    backgroundColor:"000000",
    marginTop: 30,
  },

  Top: {   
    fontSize:30,
    marginLeft:32,   
    fontFamily: 'NanumGothicBold',
  },

  menuContainer: {
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textContainer: {
    width:70,
    height:35,

    borderRadius:10,
    margin:5,
    padding:10,
    backgroundColor:"000000"
  },

  textStyle: {
    justifyContent:"center",
    textAlign:"center",
    fontSize:10,
    color:"black",
    fontFamily: 'NanumGothicBold',
  },

  customBtn:{
    backgroundColor: '#D9D9D9',
    padding: 15,
    margin: 20,
    marginTop: 500,
    borderRadius: 10,
    alignItems:"center"
  },

  icon: {
    marginLeft: 335,
    marginTop: 550,
  },

})