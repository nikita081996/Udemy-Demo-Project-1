import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('project1', () => App);
