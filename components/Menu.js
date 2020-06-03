import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

export default function Menu() {
  return (
    <View style={styles.screen}>
      <View style={styles.menubar1}>
        <Text>Stream</Text>
      </View>

      <View style={{ flex: 0.1 }} />

      <View style={styles.menubar2}>
        <Text>Classwork</Text>
      </View>

      <View style={{ flex: 0.1 }} />

      <View style={styles.menubar3}>
        <Text>People</Text>
      </View>

      <View style={{ flex: 0.1 }} />

      <View style={styles.menubar4}>
        <Text>Grades</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 30,
    height: 100,
    width: '100%',
  },
  menubar1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menubar2: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menubar3: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menubar4: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
