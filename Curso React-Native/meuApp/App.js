/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import mock from './src/mocks/cesta';
import {SafeAreaView, StatusBar} from 'react-native';

import Cesta from './src/Telas/Cesta';
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
