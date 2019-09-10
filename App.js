import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import InputBar from './components/inputBar';
import TodoItem from './components/todoItem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      todos: [
        {id: 1, title: 'Buy Eggs', done: false},
        {id: 2, title: 'Create React Native App', done: true},
      ],
    };
  }

  addNewToDo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos,
      todoInput: '',
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id === item.id) todo.done = !todo.done;

      return todo;
    });

    this.setState({todos});
  }

  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter(todo => todo.id !== item.id);

    this.setState({todos});
  }

  render() {
    const statusBar =
      Platform.OS == 'ios' ? (
        <View style={styles.statusBar}></View>
      ) : (
        <View>{null}</View>
      );

    return (
      <View style={styles.container}>
        {statusBar}

        <Header title="React Native To Do App" />

        <InputBar
          textChange={todoInput => this.setState({todoInput})}
          addNewToDo={() => this.addNewToDo()}
        />

        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  statusBar: {
    backgroundColor: '#ad1457',
    height: 40,
  },
});
