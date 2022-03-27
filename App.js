import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import BatalScreen from './src/screens/BatalScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import LainScreen from './src/screens/LainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
 
  return (
    
    <NavigationContainer>
     <Tab.Navigator screenOptions={({route}) => 
    {
      return{
        tabBarIcon: ({focused,color, size}) => {
          let iconName;
          
          
          if (route.name === 'Beranda') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Pesanan Saya') {
            iconName = focused 
            ? 'ios-book' 
            : 'ios-book-outline';
          }else if (route.name === 'Pembatalan') {
            iconName = focused 
            ? 'close' 
            : 'close-outline';
          }else if (route.name === 'Lainnya') {
            iconName = focused 
            ? 'menu' 
            : 'menu';
          }
         
          return<Ionicons name={iconName} color={color} size={size}/>
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor:'skyblue'
      }
    }
    }>
     <Tab.Screen name='Beranda' component={HomeScreen}/>
     <Tab.Screen name='Pesanan Saya' component={HistoryScreen}/>
     <Tab.Screen name='Pembatalan' component={BatalScreen}/>
     <Tab.Screen name='Lainnya' component={LainScreen}/>  
    </Tab.Navigator>
    </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

