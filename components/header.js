import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0cfb0c',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#b50f0f',
    fontSize: 30,
    fontWeight: '200',
  },
});

export default Header;
