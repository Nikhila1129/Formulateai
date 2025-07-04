// app/create-options-modal.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router'; // Import router from expo-router
import { loadOptions } from '@babel/core';

const { height } = Dimensions.get('window');

export default function CreateOptionsModal() {
  const handleCreateForm = () => {
    // Navigate to the actual form creation screen
    router.back();
    router.push('./(forms)/create-form'); // Assuming you have a 'create-form.tsx' route
  };

  const handleCreateQuiz = () => {
    // Navigate to the actual quiz creation screen
    router.back();
    router.push('./create-quiz'); // Assuming you have a 'create-quiz.tsx' route
  };
  const handleBackgroundPress = () => {
    // Close the modal when the background is pressed
    router.back(); // This will navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Set up Stack.Screen options for this modal */}
      <Stack.Screen
        options={{
          headerShown: false, // Hide the header for the modal itself
          presentation: 'transparentModal',
           // Ensure it presents as a modal
        }}
      />
      <TouchableWithoutFeedback onPress={handleBackgroundPress} >
        <View style={styles.overlay} />{/* This empty view serves as the touchable background */}
      </TouchableWithoutFeedback>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.optionCard} onPress={handleCreateForm}>
          <Ionicons name="stats-chart" size={40} color="#007AFF" />
          <Text style={styles.optionTitle}>Form</Text>
          <Text style={styles.optionDescription}>Create new Form/Survey</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={handleCreateQuiz}>
          <Ionicons name="stats-chart" size={40} color="#007AFF" />
          <Text style={styles.optionTitle}>Quiz</Text>
          <Text style={styles.optionDescription}>Create new Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center', // Position content at the bottom
  },
  overlay: {
    flex: 1, // Make the overlay take up all available space
  },
  modalContent: {
    backgroundColor: '#25292e',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 40 : 20, // Add padding for iOS home indicator
    maxHeight: height * 0.5, // Adjust max height if needed
  },
  optionCard: {
    backgroundColor: '#25292e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    width: '90%', // Adjust width as needed
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  optionDescription: {
    fontSize: 13,
    color: 'white',
    marginTop: 5,
  },
});