import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [primeiroNumero, setPrimeiroNum] =  useState();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>Calculadora</Text>
        <StatusBar style="light" />
      </View>
      <View style={styles.context}>
          <Text>Portas Lógicas</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setPrimeiroNum}
            value={primeiroNumero}
            placeholder='Digite um número'
            inputMode='numeric'
          />
         <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
           
            <Picker.Item label="And" value="and" />
            <Picker.Item label="Or" value="or" />
            <Picker.Item label="Not" value="not" />
          </Picker>
          <TextInput 
            style={styles.input}
            onChangeText={setPrimeiroNum}
            value={primeiroNumero}
            placeholder='Digite um número'
            inputMode='numeric'
          />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  statusBar: {
    backgroundColor: '#4e3',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',            
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 32,
  },
  context: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
 

});
