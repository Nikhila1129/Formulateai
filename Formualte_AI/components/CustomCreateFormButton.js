import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router';

export default function CustomCreateFormButton(props){
  const { children, style, accessibilityState, onPress } = props;
  const isSelected = accessibilityState?.selected;
  console.log("accessibilityState props:", accessibilityState);
  console.log("style props:", style);
  console.log("onPress props:", onPress);
  

  return (
    <Pressable // Using Pressable here, but you could use View with custom touch handling
      onPress={onPress} // Prop to handle the navigation when pressed
      style={[
        style, // Preserve default styling if any from React Navigation
        styles.customTabBarButton,
        isSelected && styles.customTabBarButtonActive, // Apply active style if selected
      ]}
      // You can add more props like accessibilityRole, accessibilityLabel etc.
      // that are passed down from React Navigation if needed.
    >
      {/* Render the children (icon and label) provided by React Navigation */}
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // Style for the custom tab bar button
  customTabBarButton: {
    flex: 1, // Make it take available space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB', // Light blue background for the button
    marginHorizontal: 5, // Small horizontal margin
    borderRadius: 15, // Rounded corners for the button
    paddingVertical: 8, // Vertical padding
    shadowColor: '#000', // Add some shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Style for the custom tab bar button when active/selected
  customTabBarButtonActive: {
    backgroundColor: '#2196F3', // Deeper blue when active
    borderColor: '#1565C0', // Darker blue border
    borderWidth: 2,
  },
});