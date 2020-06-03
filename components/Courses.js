import React from 'react';
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
} from 'react-native';

export default function Courses() {
  return (
    <View>
      <View>
        <Text style={styles.textHeading}>Courses</Text>
      </View>
      <View style={styles.screen}>
        <View style={styles.text}>
          <TouchableHighlight
            onPress={() =>
              Linking.openURL(
                'https://www.primapower.com/wp-content/uploads/2015/12/170c1a1afdb0030e8bd892060b01d1bf2.jpg'
              )
            }
          >
            <Image source={require('./prima1.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.primapower.com/press-brake-ep-series/'
              )
            }
          >
            eP Series press brake | Prima Power
          </Text>
          <Text onPress={() => Linking.openURL('https://www.primapower.com/')}>
            primapower.com
          </Text>
        </View>
        <View style={styles.text}>
          <TouchableHighlight
            onPress={() =>
              Linking.openURL(
                'https://www.primapower.com/wp-content/uploads/2015/12/Prima_Power_PunchBend_5_short_4x3.jpg'
              )
            }
          >
            <Image source={require('./prima2.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.primapower.com/punching-bending-machine-punchbend/'
              )
            }
          >
            Punching and bending machine PunchBend | Prima Power
          </Text>
          <Text onPress={() => Linking.openURL('https://www.primapower.com/')}>
            primapower.com
          </Text>
        </View>
        <View style={styles.text}>
          <TouchableHighlight
            onPress={() =>
              Linking.openURL(
                'https://www.primapower.com/wp-content/uploads/2015/12/0ad5fbc898774246ba0e5d06803d6ef72.jpg'
              )
            }
          >
            <Image source={require('./prima3.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL('https://www.primapower.com/de/bce/')
            }
          >
            BCe | Primapower
          </Text>
          <Text onPress={() => Linking.openURL('https://www.primapower.com/')}>
            primapower.com
          </Text>
        </View>
      </View>
    </View>
  );
}

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
});
