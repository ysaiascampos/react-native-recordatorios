import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Item from './components/Item';
import Button from './components/Button';
import datos from './Datos';



export default function App() {
  const [state, setState] = useState({
    data: datos,
  })
  const handlePress = () => {

  }
  const { data } = state;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recordatorio</Text>
      </View>
      <View style={styles.view}>
      <Button title="Agregar" onPress={handlePress} />
      </View>
      <View style={styles.lista}>
      <FlatList
        data={data}
        renderItem={Item}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 28,
  },
  lista: {
    margin: 20,
  },
  view: {
    height: 50,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
});
