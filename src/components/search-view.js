import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View>
    <Text style={styles.temp}>
      This will be our SEARCH view...
    </Text>
  </View>
);

const styles = StyleSheet.create({
  temp: {
    color: 'red',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40
  }
});