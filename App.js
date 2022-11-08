import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import User from './Screens/User';
import Signup from './Screens/Signup';
import LogoTitle from './Components/LogoTitle';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Signup'
      screenOptions ={{
          headerStyle:{
            backgroundColor:'green'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontWeight:'bold',
            color:'black'
          }
      }}>
        <Stack.Screen name="Singup" component={Signup}/>
        <Stack.Screen name = "Home" component={Home} 
        options = {{title:'Home Screen',
          headerTitle:LogoTitle}}/>
        <Stack.Screen name = "User" component={User}
          initialParams={{
            userIdx:50,
            userName:'Samual',
            userLastName:'Song'
          }}
          options = {{title:'User Screen',
          headerStyle:{
            backgroundColor:'green'
          },
          haederTintColor:'red',
          headerTitleStyle:{
            fontWeight:'bold',
            color:'purple'
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
