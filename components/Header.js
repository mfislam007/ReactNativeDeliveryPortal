import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  Linking,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const Header = () => {
  const [items, setItems] = useState([
    {
      id: Math.random().toString(),
      image: 'prima1.jpg',
      name: ' eP Series press brake | Prima Power',
      url: 'https://www.primapower.com/',
    },
    {
      id: Math.random().toString(),
      image: 'prima2.jpg',
      name: ' Punching and bending machine PunchBend | Prima Power',
      url: 'https://www.primapower.com/',
    },
    {
      id: Math.random().toString(),
      image: 'prima3.jpg',
      name: ' BCe | Primapower',
      url: 'https://www.primapower.com/',
    },
  ]);

  return (
    <View>
      <View>
        <Text style={styles.textHeading}>Courses</Text>
      </View>
      <View style={styles.screen}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Text>{item.url}</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    padding: 20,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 150,
    alignContent: 'center',
  },
});

export default Header;
