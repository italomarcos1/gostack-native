import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Colors, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import './config/ReactotronConfig';

export default class App extends Component {
    render(){
        return (
        <>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome to React Native</Text>
              <Text style={styles.welcome}>First App</Text>
                <ReloadInstructions />
              </Text>
            </View>
          </View>
        </>
        );
    }
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

