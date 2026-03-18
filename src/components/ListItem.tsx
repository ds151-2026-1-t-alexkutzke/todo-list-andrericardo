import { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ListItemProps{
text: string;
isTaskDone: boolean;
onPress: ()=>void;
}

const ListItem = ({text,isTaskDone,onPress} : ListItemProps) => {

  return (
    <TouchableOpacity style={isTaskDone ? styles.taskDone : styles.task} onPress={onPress}> {//Mudam com status
    <Text style ={isTaskDone ? styles.textDone : styles.textNormal}> {text} </Text> {//Mudam com status
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: { // css diferente de 'taskDone', mas nao fiz ainda
    flexDirection: 'row', 
    alignItems: 'center',      
    marginBottom: 15,
  },
  taskDone: {
    flexDirection: 'row', 
    alignItems: 'center',      
    marginBottom: 15,
  },
  textDone: {
    textDecorationLine: 'line-through',
  },
  textNormal: {

  }
});

export default ListItem;
