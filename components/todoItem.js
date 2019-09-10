import React from 'react';
import {StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}>
        <Text
          style={
            todoItem.done
              ? {color: '#424242', fontSize: 15}
              : {color: '#fff', fontSize: 15}
          }>
          {todoItem.title}
        </Text>
        <Button
          title={todoItem.done ? 'Task Done' : 'Remove Task'}
          color={'rgba(255,0,0,1)'}
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: '#424242',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
