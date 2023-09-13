// Funções 
import React from 'react';

// Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';

const Tabs = createBottomTabNavigator();

export type TabStackParamsList = {
  Home: undefined,
  Actor: undefined,
  Movie: undefined,
  Rent: undefined,
}

export function Routes() {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        initialRouteName="Home"
      >
        <Tabs.Screen 
          name="Home"
          component={Home}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
