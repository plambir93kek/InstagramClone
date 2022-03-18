import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Navigator } from './src/navigation/Navigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='dark' />
      <Navigator />
    </Provider>
  );
}
