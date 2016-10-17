import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View>
    <Text style={styles.temp}>
      This will be our RESERVATIONS view...
    </Text>
  </View>
);

const styles = StyleSheet.create({
  temp: {
    color: 'blue',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40
  }
});