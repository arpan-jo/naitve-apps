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
import Transactions from '../Transactions/Transactions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: 'green',
          },
          safeAreaInsets: {
            bottom: 35,
          },
          activeTintColor: 'red',
        }}>
        {/* <Stack.Screen
          name="Login"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Payment" component={Transactions} /> */}

        <Tab.Screen
          name="Login"
          component={LogIn}
          options={{
            // tabBarIcon: () => {
            //
            // },
            // title: 'Test One',

            tabBarLabel: ({color, focused}) => {
              return (
                <>
                  <View style={{color: color, alignItems: 'center'}}>
                    <Icon name="mail" size={20} color={color} />
                    <Text style={{color}}>Login</Text>
                  </View>
                </>
              );
            },
          }}
        />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Payment" component={Transactions} />
      </Tab.Navigator>
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default Navigation;
