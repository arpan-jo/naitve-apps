import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../LogIn/LogIn';
import User from '../User/User';
// import Transactions from '../Transactions/Transactions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Payment" component={Transactions} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
