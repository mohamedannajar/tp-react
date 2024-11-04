import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const addGoalHandler = () => {
    if (goal.trim()) {
      setGoals((currentGoals) => [...currentGoals, goal]);
      setGoal('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter un objectif"
          value={goal}
          onChangeText={setGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    marginRight: 10,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
    width: '100%',
  },
});
