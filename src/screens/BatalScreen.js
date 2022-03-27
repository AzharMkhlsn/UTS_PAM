import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

export default function BatalScreen() {

  return (
    <View style={styles.container}>
    
      
      <Image 
      style={styles.image}
      source={require('./tiket.jpg')} ></Image>
     <Text style ={styles.batal}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:300,
    width:300
  },
  batal:{
    color:'blue',
    fontWeight:'bold',
    fontSize :16
  }
});
 