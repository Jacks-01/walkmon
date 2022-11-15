import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import AppBar from './components/AppBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from 'react-native-web';


export default function App() {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    (async () => {

      let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      let results = response.data.results;
      console.log(results);
      setPokeData(results)
    })();
  }, []);

  const renderItem = ({ item }) => (

    <Button>{item.name}</Button>
  )


  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Text>Hello World</Text>
        <FlatList
          data={pokeData}
          renderItem={renderItem}
        />
        <StatusBar style="auto" />
      </View>
    </>
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
