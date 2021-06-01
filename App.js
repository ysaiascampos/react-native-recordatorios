import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import Item from './components/Item';
import Button from './components/Button';
import Input from './components/Input';



export default function App() {
  const [state, setState] = useState({
    data: [],
    isVisible: false,
    text: "",
  })
  
  const handlePress = () => {
    setState({...state,
      isVisible: true
    })
  }
  const handleChange = text => {
    setState({...state,
      text
    })
  }
  const handleSave = () => {
    const { text, data } = state
    const datos = [{ key: Math.random().toString(), title: text }].concat(data);
    setState({...state,
      data: datos,
      isVisible: false,
      text: "",
    })
  }
  const { data } = state;
  return (
    <View style={[styles.container,styles.gray]}>
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
      <Modal
        visible={state.isVisible}
        animationType="slide"

      >
        <View  style={[styles.container, styles.center]}>
          <Text style={styles.modalTitle}>Ingrese Recordatorio</Text>
          <Input 
            placeholder="Recordatorio" 
            onChangeText={handleChange} 
            value={state.text}
          />
          <Button title="Guardar" onPress={handleSave} />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
  gray: {
    backgroundColor: "#eee",
  },
  modalTitle: {
    fontSize: 28,
  },
});
