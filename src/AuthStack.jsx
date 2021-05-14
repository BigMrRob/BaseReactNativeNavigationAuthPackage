import React from 'react';
import { Text, Button } from 'react-native';
import Center from './Center';
import { AuthContext } from './AuthProvider';
import AuthStack from './AuthStack';
const Stack = createStackNavigator();
const Login = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title='Log me in'
        onPress={() => {
          login();
        }}
      />
      <Button
        title='Go to register'
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
};

const Register = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
      <Button
        title='Go to login'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerTitle: 'Im cool',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
