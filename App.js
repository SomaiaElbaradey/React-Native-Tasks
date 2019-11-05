/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import AlbumList from './Components/course';
import Header from './Components/Header';

import {
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex:1}} >
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

};

const styles = {

  list1: {
    fontSize: 25,
    color: "white",
    fontWeight: 'bold',
    padding: 20,
    textAlign : "center"
  },
  main :{
    backgroundColor: "black"
  },
  container: {
    padding: 20
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },

};

export default App;
