import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Center from './Center';
import { Text, Button } from 'react-native';
import {AuthContext} from './AuthProvider'
const Tabs = createBottomTabNavigator();

const Home = () => {

  const { logout } = React.useContext(AuthContext)
  return (
    <Center>
      <Text>Home</Text>
      <Button title="logout" onPress={() => logout()} />
    </Center>
  );
};
const Search = () => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
};
const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home}></Tabs.Screen>
      <Tabs.Screen name='Search' component={Search}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default AppTabs;
