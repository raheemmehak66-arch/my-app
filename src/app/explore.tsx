import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{ setData(res.data); setLoading(false); })
    .catch(()=>{ setError('Failed to load API'); setLoading(false); })
  },[]);

  if(loading) return <View style={styles.center}><ActivityIndicator size="large"/></View>
  if(error) return <View style={styles.center}><Text>{error}</Text></View>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Fixed - API Data</Text>
      <Text style={{marginBottom:10}}>Live data from axios.get()</Text>
      <FlatList data={data} keyExtractor={(item:any)=>item.id.toString()}
        renderItem={({item}:any)=>(
          <View style={styles.card}>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{flex:1, padding:20, paddingTop:60, backgroundColor:'#fff'},
  center:{flex:1, justifyContent:'center', alignItems:'center'},
  title:{fontSize:24, fontWeight:'bold', marginBottom:10},
  card:{padding:15, borderWidth:1, borderColor:'#ddd', borderRadius:10, marginBottom:10, backgroundColor:'#fff'}
});