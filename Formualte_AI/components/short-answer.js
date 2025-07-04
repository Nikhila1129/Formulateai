import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you installed @expo/vector-icons

const ShortAnswer = ({id}) => {
  const [questionText, setQuestionText] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [displayDescription, setDisplayDescription] = useState('hidden');

  return (
    <>
      {/* Header Section: Question Number and Input */}
      <View style={styles.header}>
        <Text style={styles.questionNumber}>{id}.</Text>
        <TextInput
          style={styles.questionInput}
          onChangeText={setQuestionText}
          value={questionText}
          placeholder="Enter your question"
          placeholderTextColor="#999"
        />
        {/* Blue underline - often done with a bottom border or a separate view */}
        <View style={styles.inputUnderline} />
      </View>

      {/* Description Section */}
      <TouchableOpacity style={styles.descriptionContainer} onPress={() => setDisplayDescription(displayDescription === 'hidden' ? 'visible' : 'hidden')}>
        <Text style={styles.descriptionText}>Description</Text>
        <Ionicons name="pencil" size={16} color="#007AFF" style={styles.descriptionIcon} />
      </TouchableOpacity>

        { displayDescription === 'visible' && (
            <View style={styles.descriptioninputContainer} >
            <TextInput
            style={styles.questionInput}
            onChangeText={(text) => console.log('Description:', text)}
            placeholder="Enter description (optional)"
            placeholderTextColor="#999"
            />
            </View>
        ) }

      {/* Short Answer / Required Section */}
      <View style={styles.typeRequiredContainer}>
        <View style={styles.typeContainer}>
          <Ionicons name="reorder-four-outline" size={18} color="#666" style={styles.typeIcon} />
          <Text style={styles.typeText}>Short Answer</Text>
        </View>
        <View style={styles.requiredContainer}>
          <Text style={styles.requiredText}>Required</Text>
          <Switch
            onValueChange={setIsRequired}
            value={isRequired}
            trackColor={{ false: '#767577', true: '#81b0ff' }} // Example colors
            thumbColor={isRequired ? '#007AFF' : '#f4f3f4'} // Example colors
          />
        </View>
      </View>

      {/* Action Buttons Section */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="attach" size={24} color="#666" />
          <Text style={styles.actionButtonText}>Attach</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="git-branch-outline" size={24} color="#666" />
          <Text style={styles.actionButtonText}>Logic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash-outline" size={24} color="#666" />
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#25292e',
    borderRadius: 8,
    margin: 0,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative', // For positioning the underline
  },
  questionNumber: {
    top: 2,
    left: 3,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#999',
  },
  questionInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 5,
    color: '#999',
  },
  inputUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 0,
    height: 2,
    backgroundColor: '#007AFF', // Blue color for the underline
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
    alignSelf: 'flex-start', // Align to start to wrap content
  },
  descriptionText: {
    color: '#007AFF', // Blue color
    fontSize: 14,
    marginRight: 5,
  },
  descriptionIcon: {
    // Styling for the pencil icon
  },
  typeRequiredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    marginBottom: 20,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeIcon: {
    marginRight: 5,
  },
  typeText: {
    fontSize: 16,
    color: '#666',
  },
  requiredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requiredText: {
    fontSize: 16,
    marginRight: 10,
    color: '#666',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 12,
    marginTop: 5,
    color: '#666',
  },
  descriptioninputContainer: {
    marginBottom: 20,
    width: '100%',
  },
});

export default ShortAnswer;