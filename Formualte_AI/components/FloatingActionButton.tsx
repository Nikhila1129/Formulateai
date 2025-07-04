import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type FloatingActionButtonProps = {
  onPress: () => void;
};

export default function FloatingActionButton({ onPress }: FloatingActionButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow]}
      onPress={onPress}
    >
      <Ionicons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});