import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import Center from './Center';
import { AuthContext } from './AuthProvider';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';

const Routes = () => {
  const { user, login } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Check if the user is logged in with async function
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          //decode
          login();
        }
        setLoading(false);

        console.log(userString);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
