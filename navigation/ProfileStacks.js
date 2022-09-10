import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Profile_setting from '../screens/Profile/Profile_setting'
import Profile_edit from '../screens/Profile/Profile_edit';
import Profile_myboard from '../screens/Profile/Profile_myboard';
import Profile_mychatting from '../screens/Profile/Profile_mychatting';
import Profile_Restriction from '../screens/Profile/Profile_Restriction';


const ProfileStacks = () => {
  return (
    <ProfileStacks.Navigator>
        <ProfileStacks.Screen name={Profile_setting} component={Profile_setting}/> 
        <ProfileStacks.Screen name={Profile_edit} component={Profile_edit}/> 
        <ProfileStacks.Screen name={Profile_myboard} component={Profile_myboard}/> 
        <ProfileStacks.Screen name={Profile_mychatting} component={Profile_Restriction}/> 
    </ProfileStacks.Navigator>
  )
}

export default ProfileStacks

const styles = StyleSheet.create({})