import React, { Component } from 'react';
import { TabBarIOS, View, StyleSheet } from 'react-native';
import TitleBar from './titlebar';
import Search from './search-view';
import Reservations from './reservations-view';
import Map from './map-view';

export default class NavTabs extends Component {

  renderTabView (key) {
    switch (key) {
      case 'search':
        return <Search />;
      case 'manage':
        return <Reservations />;
      case 'find-me':
        return <Map centerOnCar={true} />;
    }
  }

  render () {

    const tabs = this.props.tabs.tabs.map( ( tab, i ) =>
      <TabBarIOS.Item key={tab.key}
        icon={tab.icon}
        selectedIcon={tab.selectedIcon}
        title={tab.title}
        onPress={ () => this.props.selectTab(i) }
        selected={ this.props.tabs.index === i }>
        {this.renderTabView(tab.key)}
      </TabBarIOS.Item>
    );

    return <View style={ styles.container }>
      <TitleBar title={ 'Parking SQUAT'.toUpperCase() } />
      <TabBarIOS tintColor='white' barTintColor='black'>
        { tabs }
      </TabBarIOS>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});