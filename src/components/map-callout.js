import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class CustomCallout extends Component {

  render() {
    return <View>
      <Text>{ this.props.name }</Text>
      <Text>Some longer description...</Text>
    </View>;
  }

}

var styles = StyleSheet.create({
});