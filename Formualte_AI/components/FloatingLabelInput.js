import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  Animated,
  StyleSheet,
  Easing,
  Platform,
} from 'react-native';

const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const animatedIsFocused = useRef(new Animated.Value(0)).current; // 0 for unfocused, 1 for focused/filled

  // Determine if the label should be in the "floating" position
  const shouldFloat = isFocused || inputValue;

  // Animate the label's position and size
  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: shouldFloat ? 1 : 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false, // `useNativeDriver` is not supported for `top`, `left`, `fontSize`
    }).start();
  }, [shouldFloat, animatedIsFocused]);

  const labelStyle = {
    position: 'absolute',
    left: 12,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -10], // Adjust top for unfocused vs. floating
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Adjust font size for unfocused vs. floating
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#9ca3af', '#3b82f6'], // Gray when unfocused, blue when focused
    }),
    backgroundColor: '#ffd33d', // To hide the border underneath the label
    paddingHorizontal: 4,
    // Ensure the background covers the border when label is floating
    ...(shouldFloat && {
      transform: [{ translateY: Platform.OS === 'ios' ? 0 : 2 }], // Small adjustment for Android label position
    }),
  };

  const inputContainerStyle = {
    borderColor: isFocused ? '#3b82f6' : '#d1d5db', // Blue when focused, gray when unfocused
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 20, // To make space for the floating label above
  };

  return (
    <View style={styles.container}>
      <View style={inputContainerStyle}>
        <Animated.Text style={labelStyle}>
            {label}
        </Animated.Text>
        <TextInput
            style={styles.textInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
            {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18, // Space for the label to float into
    marginBottom: 20,
    width: '90%',
  },
  textInput: {
    height: 50, // Fixed height for input area
    fontSize: 16,
    color: 'white', // Dark gray text
    paddingHorizontal: 0, // Reset default padding
    paddingVertical: 0, // Reset default padding
  },
});

export default FloatingLabelInput;