import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CommentsScreen } from '../screens/CommentsScreen/CommentsScreen';
import { SearchScreen } from '../screens/SearchScreen/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconSvgHome from '../assets/icons/IconSvgHome';
import IconSvgSearch from '../assets/icons/IconSvgSearch';
import IconSvgHomeActive from '../assets/icons/IconSvgHomeActive';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <IconSvgHomeActive /> : <IconSvgHome />
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => {
            return <IconSvgSearch />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BottomTabsNavigator} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}