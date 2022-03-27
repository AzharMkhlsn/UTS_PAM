import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, FlatList, Text, View, Image,TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen() {

  const [ awal,setAwal ]= useState("");
  const [ tujuan,setTujuan ]= useState("");
  const [ pelayanan,setPelayanan ]= useState("");
  const [ tanggal,setTanggal ]= useState("");
  const [ waktu,setWaktu ]= useState("");
  const navigation = useNavigation();
 

 
  
  return (
    <ScrollView>
    <View style={styles.container }>
   
      <StatusBar style={styles.view2} />
    
      <View style= {styles.view1}>
      
      <Text style= {styles.view3}> Kapalzy </Text>
      <Text > Merak : Bakauheni </Text>
  <Fumi
    label={'Pelabuhan Awal'}
    iconClass={FontAwesomeIcon}
    iconName={'ship'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={16}
    inputStyle={{}}
    
    onChangeText={(value) => setAwal(value)}
       value={awal} style={styles.input}
  />
  <Fumi
    label={'Pelabuhan Tujuan'}
    iconClass={FontAwesomeIcon}
    iconName={'ship'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={16}
    inputStyle={{}}
    
    onChangeText={(value) => setTujuan(value)}
       value={tujuan} style={styles.input}
  />
  <Fumi
    label={'Pilih Layanan (executive/umum)'}
    iconClass={FontAwesomeIcon}
    iconName={'chair'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={16}
    inputStyle={{}}
    
    onChangeText={(value) => setPelayanan(value)}
       value={pelayanan} style={styles.input}
  />
    <Fumi
    label={'Masukan Tanggal'}
    iconClass={FontAwesomeIcon}
    iconName={'calendar'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={16}
    inputStyle={{}}
    
    onChangeText={(value) => setTanggal(value)}
       value={tanggal} style={styles.input}
  />
    <Fumi
    label={'Masukan Waktu'}
    iconClass={FontAwesomeIcon}
    iconName={'clock'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={16}
    inputStyle={{}}
    
    onChangeText={(value) => setWaktu(value)}
       value={waktu} style={styles.input}
  />
  <Text/>
    <Button title='Pesan' onPress={()=> 
        navigation.navigate('Pesanan Saya', {awal ,tujuan, pelayanan, tanggal, waktu ,harga :65000})}></Button> 
      </View>
   
     
    </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1:{
    backgroundColor:'#f95a25',
    borderRadius: 10,
    height:490,
    width:350,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

view2:{
  backgroundColor:'#f95a25',
},
view3:{
  color: 'blue',
  fontSize : 30,
  fontWeight:'bold',
  },
 input:{
height:20,
borderRadius: 10,
width:300,
borderColor:'black',
borderWidth :1,
marginTop :6
 }
});
