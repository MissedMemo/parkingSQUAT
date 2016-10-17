import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => <View>
  <Text style={ styles.demo }>Hello!</Text>
</View>;

const styles = StyleSheet.create({

  demo: {
    textAlign: 'center',
    color: 'red',
    marginTop: 40,
    fontSize: 32
  }

}); 