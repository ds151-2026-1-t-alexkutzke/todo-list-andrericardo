import { useState } from 'react';
import { TextInput, View, Text, StyleSheet,Button, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

// Fazer interface para dados de task 

// Criar array de tasks

// Criar funcao que faz sort das tasks pelo status

// Criar funcao que cria componente (usando {text} de TextInput

// Criar funcao que altera status com pressable


const ToDoListScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="~ ~ ~"
        onChangeText={setText}
        multiline={false}     
        numberOfLines={1} 
      />
      <View style={styles.buttonAdd}>
      <Button    
        title="OK"
      />
      {text}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ // feito por ia, esta muito ruim (quando escrevemuito texto quebra)
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    flex: 3,// 75%
    borderWidth: 1,   
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonAdd: {
    flex: 1,// 25%
  },
});

export default ToDoListScreen;
