import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({ title }) => <Text style={ styles.titlebar }>
  {title}
</Text>;

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: '#00C1D5',
    fontSize: 20,
    paddingTop: 22,
    paddingBottom: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});