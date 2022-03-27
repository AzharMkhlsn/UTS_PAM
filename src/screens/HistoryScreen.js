import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HistoryScreen({route}) {

  const navigation = useNavigation();

 const {awal, tanggal,pelayanan,waktu, harga,tujuan, name, age,identitas }= route.params;
  return(

<View style = {styles.container}>


<View style= {styles.view3}>
<Text style= {styles.view4}> Kapalzy </Text>
<View style= {styles.view1}>
      
      <View style= {styles.title2}>
      
      <Text style= {styles.title}> {awal} -----  {tujuan}</Text>
      
      <Text>Jadwal Masuk Pelabuhan</Text>
      <Text> </Text> 
      <Text >{tanggal}</Text>
      <Text >{waktu} WIB</Text>

      <Text>Layanan</Text>
      <Text >{pelayanan}</Text>
      <View  style= {styles.view2}/>
      <Text> Dewasa x 1                                               {harga}</Text>

      </View>

      </View>
      <View>
        <Text  style= {styles.title}>
        Total                              Rp {harga}
          </Text>
        </View>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{identitas}</Text>

        <View>
        <Button title='Cek Pesanan ' onPress={()=> 
      alert('Permintaan Anda Sedang diproses')}></Button> 
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
  view1:{
    marginTop : 10,
    justifyContent: 'center',
    borderRadius : 10,
    backgroundColor:'grey',
    height:260,
    width:300,

   
  },
  view3 :{
    borderRadius : 10,
    alignItems: 'center',
    backgroundColor: '#f95a25',
    justifyContent: 'center',
  },
  title:{
    fontSize:20,
    marginTop : 10,
    marginVertical : 20,
    color:'black',
  },
  title2:{
    marginHorizontal : 10,
    color:'black',
  },
  view2:{
    borderBottomWidth: 2,
   marginTop : 5,
  },
  view4:{
    color: 'blue',
    fontSize : 30,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    },

});
 