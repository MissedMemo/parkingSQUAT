import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View>
    <Text style={styles.temp}>
      This will be our MAP view...
    </Text>
  </View>
);

const styles = StyleSheet.create({
  temp: {
    color: 'green',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40
  }
});