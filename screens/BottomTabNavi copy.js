import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main_root from "../screens/Main_Screen/Main_root";
import Main_board from "../screens/Main_Screen/Main_board";
import Main_chat from "../screens/Main_Screen/Main_chat";
import Main_profile from "../screens/Main_Screen/Main_profile";
import MainSchool from "./Main_Screen/Main_root_note/MainSchool";

import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";

import MainSystem from "./Main_Screen/Main_root_note/MainSystem";

import Board_free from "./Main_Screen/Main_board_note/Board_free";
import Board_contest from "./Main_Screen/Main_board_note/Board_contest"
import Board_job from "./Main_Screen/Main_board_note/Board_job"
import Board_group from "./Main_Screen/Main_board_note/Board_group"
import Board_write from "./Main_Screen/Main_board_note/Board_write";


import Chat_free from "./Main_Screen/Main_chat_note/Chat_free"
import Chat_contest from "./Main_Screen/Main_chat_note/Chat_contest"
import Chat_job from "./Main_Screen/Main_chat_note/Chat_job"
import Chat_group from "./Main_Screen/Main_chat_note/Chat_group"
import Chat_write from "./Main_Screen/Main_chat_note/Chat_write";

import Profile_re from "./Main_Screen/Main_profile_note/Profile_re";
import Profile_setting from "./Main_Screen/Main_profile_note/Profile_setting";
import Profile_myboard from "./Main_Screen/Main_profile_note/Profile_myboard"
import Profile_mychat from "./Main_Screen/Main_profile_note/Profile_mychat"
import Profile_Restriction from "./Main_Screen/Main_profile_note/Profile_Restriction"


const TabStack = createBottomTabNavigator();
const ConnectStack = createStackNavigator();
const BoardStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const ConnectStackScreen = ()=> {
  
  return(
   <ConnectStack.Navigator>
  <ConnectStack.Screen name="Connect1" component={Main_root} options={{headerShown: false}} />
  <ConnectStack.Screen name="학교 공지사항" component={MainSchool}  />
  <ConnectStack.Screen name="시스템 공지사항" component={MainSystem} />
  </ConnectStack.Navigator>
  );
};

const BoardStackScreen = ()=> {
  return(
   <BoardStack.Navigator>
  <BoardStack.Screen name="Board1" component={Main_board} options={{headerShown: false}} />
  <BoardStack.Screen name="자유 게시판" component={Board_free} />
  <BoardStack.Screen name="공모전 게시판" component={Board_contest} />
  <BoardStack.Screen name="동아리 게시판" component={Board_group} />
  <BoardStack.Screen name="취업 게시판" component={Board_job} />
  <BoardStack.Screen name="글작성" component={Board_write}/>
  </BoardStack.Navigator>
  );
};

const ChatStackScreen = ()=> {
  return(
   <ChatStack.Navigator>
  <ChatStack.Screen name="Chat" component={Main_chat} options={{headerShown: false}} />
  <ChatStack.Screen name="자유 채팅방" component={Chat_free} />
  <ChatStack.Screen name="공모전 채팅방" component={Chat_contest} />
  <ChatStack.Screen name="동아리 채팅방" component={Chat_group} />
  <ChatStack.Screen name="취업 채팅방" component={Chat_job} />
  <ChatStack.Screen name="글작성" component={Chat_write} />
  </ChatStack.Navigator>
  );
};

const ProfileStackScreen = ()=> {
  return(
      <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Main_profile} options={{headerShown: false}} />
    <ProfileStack.Screen name="프로필 설정" component={Profile_setting} />
    <ProfileStack.Screen name="개인정보 수정" component={Profile_re}/>
    <ProfileStack.Screen name="내 게시글" component={Profile_myboard}/>
    <ProfileStack.Screen name="내 채팅방" component={Profile_mychat}/>
    <ProfileStack.Screen name="이용 제한 내역" component={Profile_Restriction}/>
    </ProfileStack.Navigator>
    );
  };


const TabStackScreen =() => {
  return (
    <TabStack.Navigator>
    <TabStack.Screen name="Connect" component={ConnectStackScreen} options={{ headerShown: false,
          tabBarIcon: () => (
            <AntDesign 
            name="home" 
            size={24} 
            color="black" 
            />
        ),
        }}
      />

    <TabStack.Screen name="Board" component={BoardStackScreen} options={{headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="clipboard-edit-outline" 
            size={24} 
            color="black" 
            />
          ),
      }}
      />  
    <TabStack.Screen name="Chat" component={ChatStackScreen} options={{ headerShown: false,
        tabBarIcon: () => (
          <AntDesign 
          name="wechat" 
          size={24} 
          color="black" 
          />
        ),
      }}  
      />
    <TabStack.Screen name="Profile" component={ProfileStackScreen} options={{  headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="human"
            size={24}
            color="black" 
            />
          ),
        }}   />
        
    </TabStack.Navigator>
  );
};


export default TabStackScreen;
