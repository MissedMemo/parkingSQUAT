import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({title}) => <Text style={ styles.titlebar }>
  {title}
</Text>;

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: 'blue',
    fontSize: 32,
    paddingTop: 20,
    paddingBottom: 6,
    textAlign: 'center',
    color: 'lightblue'
  }
});