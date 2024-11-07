import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal, ImageBackground, TouchableNativeFeedback } from 'react-native';

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
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = () => {
    if (goal.trim()) {
      setGoals((currentGoals) => [...currentGoals, goal]);
      setGoal('');
      setModalVisible(false);
    }
  };

  const deleteGoalHandler = (index) => {
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.goalItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteGoalHandler(index)}>
              <Text style={styles.deleteText}> ❌ </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
      <View style={styles.inputContainer}>
        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Ajouter un objectif</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ajouter un objectif"
            value={goal}
            onChangeText={setGoal}
          />
          <Button title="Add" onPress={addGoalHandler} />
          <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteText: {
    color: 'red',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
