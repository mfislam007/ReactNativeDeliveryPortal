import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Menu from './components/Menu.js';
import Courses from './components/Courses.js';
//import Header from './components/Header.js';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...courseGoals, enteredGoal]);
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          <View>
            <Menu />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Shear somthing...'
              style={styles.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <Button title='Submit' onPress={addGoalHandler} />
          </View>
          <View>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => (
                <View style={styles.listItem}>
                  <Text>{itemData.item}</Text>
                </View>
              )}
            />
          </View>
          <View>
            <Courses />
            {/*<Header />*/}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
