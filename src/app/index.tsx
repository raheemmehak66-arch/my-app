import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState(null);
  useEffect(()=>{ AsyncStorage.getItem('myRecords').then(d=>{if(d) setRecords(JSON.parse(d))}) },[]);
  useEffect(()=>{ AsyncStorage.setItem('myRecords', JSON.stringify(records)) },[records]);
  const addOrUpdate=()=>{
    if(!name) return;
    if(editId){ setRecords(records.map(r=>r.id===editId?{...r,name}:r)); setEditId(null); }
    else setRecords([...records, {id:Date.now().toString(), name}]);
    setName('');
  }
  const filtered = records.filter(r=>r.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Fixed - CRUD App</Text>
      <TextInput placeholder="Search..." value={search} onChangeText={setSearch} style={styles.input}/>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName} style={styles.input}/>
      <Pressable onPress={addOrUpdate} style={styles.btn}><Text style={styles.btnText}>{editId?'Update':'Add'}</Text></Pressable>
      <FlatList data={filtered} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={styles.card}>
          <Text>{item.name}</Text>
          <View style={{flexDirection:'row', gap:10}}>
            <Pressable onPress={()=>{setName(item.name); setEditId(item.id)}}><Text style={{color:'blue'}}>Edit</Text></Pressable>
            <Pressable onPress={()=>setRecords(records.filter(r=>r.id!==item.id))}><Text style={{color:'red'}}>Delete</Text></Pressable>
          </View>
        </View>
      )}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{flex:1, padding:20, paddingTop:60, backgroundColor:'#fff'},
  title:{fontSize:24, fontWeight:'bold', marginBottom:15},
  input:{borderWidth:1, borderColor:'#ccc', padding:12, borderRadius:8, marginBottom:10},
  btn:{backgroundColor:'black', padding:14, borderRadius:8, alignItems:'center', marginBottom:15},
  btnText:{color:'white', fontWeight:'bold'},
  card:{flexDirection:'row', justifyContent:'space-between', padding:15, borderWidth:1, borderColor:'#eee', borderRadius:10, marginBottom:8}
});