import React from 'react';
import { StatusBar, View } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#e6b32a"/>
      <Routes />
    </>
    );
}
