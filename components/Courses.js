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
  ScrollView,
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
            Safety system (ALL USERS)
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
            Operating with LPBB_line (OPERATORS)
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
            Oerating with Tulus (OPERATORS)
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
            <Image source={require('./prima4.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL('https://www.primapower.com/de/bce/')
            }
          >
            NC Epress (DESIGNERS)
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
            <Image source={require('./prima5.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL('https://www.primapower.com/de/bce/')
            }
          >
            Tulus Power Processing (MANAGER)
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
            <Image source={require('./prima6.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL('https://www.primapower.com/de/bce/')
            }
          >
            Maintenance (OPERATORS)
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
            <Image source={require('./prima7.jpg')} style={styles.image} />
          </TouchableHighlight>
          <Text
            onPress={() =>
              Linking.openURL('https://www.primapower.com/de/bce/')
            }
          >
            Kysely lomake testi
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignContent: 'stretch',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 400 / 2,
  },
});
