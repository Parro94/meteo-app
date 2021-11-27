import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import City from './screens/City'
import Profile from './screens/Profile'
import { colors } from './utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: colors.mainOrange },
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen name="Home" component={tabNavigation} />
        <Stack.Screen options={({ route }) => ({ title: route.params.title })} name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, focused, size }) => {
        let iconName

        if (route.name === 'Home') {
          iconName = 'home-outline'
        } else if (route.name === 'Profile') {
          iconName = 'person-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}
      tabBarOptions={{
        activeTintColor: 'red'
      }}>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default App;