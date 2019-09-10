import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const InputBar = props => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput
          placeholder="Add New Task Here"
          placeholderTextColor="#e8f319"
          style={styles.input}
          onChangeText={todoInput => props.textChange(todoInput)}
          value={props.todoInput}
        />
        <TouchableOpacity style={styles.addBtn} onPress={props.addNewToDo}>
          <Image style={styles.icon} source={require('./../assets/add.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.instructions}>Click on task to mark done/undone.</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#424242',
    flex: 1,
    fontSize: 18,
    height: 50,
    color: '#fff',
  },
  addBtn: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  instructions: {
    fontSize: 18,
    color: '#ff0',
  },
});

export default InputBar;
