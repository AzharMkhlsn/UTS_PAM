import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function LainScreen() {
 const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
      <Text style={styles.menu2}> Menu </Text>

    <View style={styles.back}>
      
      <View>
      <View  style={styles.cek}>
      <FontAwesome5  name='search' color={'blue'}size={30} onPress={()=> 
      alert('Permintaan Anda Sedang diproses')}/>
      <Text> Cek Pemesanan</Text>
      </View>

      <View  style={styles.cek}>
      <FontAwesome5  name='phone' color={'red'}size={30} onPress={()=> 
      alert('Silahkan hubungi +628xxxxxx')}/>
      <Text> Hubungi Kami</Text>
      </View>

      </View>


      <View>
      <View  style={styles.profile}>
      <FontAwesome5  name='id-card' color={'green'}size={30}  onPress={()=> 
      alert('Layanan sedang dalam tahap perbaikan')}/>
      <Text> Detail Profile</Text>
     
      </View>
      <View  style={styles.profile}>
      <FontAwesome5  name='clipboard-list' color={'orange'}size={30}  onPress={()=> 
      alert('Anda belum memiliki riwayat pemesanan')}/>
      <Text> Riwayat Pemesanan</Text>
     
      </View>
      </View>
  
   
    
      </View>
      </View>

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
menu:{
  height:300,
  width:270,
  backgroundColor: '#f95a25',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius : 10

},
menu2:{
  fontSize : 26,
  color: '#fff',
  fontWeight : 'bold',
  alignItems: 'center',
  justifyContent: 'center',

},
back:{
 
  flexDirection:'row',
  backgroundColor: '#f95a25',
  alignItems: 'center',
  justifyContent: 'center',

},
cek:{
  marginHorizontal:10,
  backgroundColor: '#fff',
  marginVertical:10,
  height:70,
  width:100,
  borderColor: 'black',
  borderWidth:2,
  borderRadius :6,
  alignItems: 'center',
  justifyContent: 'space-between',

},
profile:{
 backgroundColor: '#fff',
 marginHorizontal:10,
 marginVertical:10,
  height:70,
  width:100,
  borderColor: 'black',
  borderWidth:2,
  borderRadius :6,
  alignItems: 'center',

}
}
);

 