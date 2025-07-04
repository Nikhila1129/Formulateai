import { Stack, Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity, View, Platform, StyleSheet } from 'react-native';
import CustomCreateFormButton from '../../components/CustomCreateFormButton'; // Adjust path as needed
import { MaterialIcons } from '@expo/vector-icons';

type CreateFormTabButtonProps = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

// const CreateFormTabButton = ({ children, onPress }: CreateFormTabButtonProps) => (
  
//   <TouchableOpacity
//     style={styles.createFormButtonWrapper}
//     activeOpacity={0.7}
//     onPress={onPress}
//   >
//     <View style={styles.createFormButton}>
//       {children}
//     </View>
//   </TouchableOpacity>
// );

const CreateFormButton = ({ children, onPress }: CreateFormTabButtonProps) => (
  <TouchableOpacity
    style={styles.createButtonContainer}
    onPress={onPress}
  >
    <View style={styles.createButton}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShown: false, // Show the header for all screens
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
          height: 80, // Give some extra height to the tab bar to accommodate the lifted button
          paddingBottom: 10, // Adjust if content is too close to bottom
        },
      }}
    >
      <Tabs.Screen
        name="create-form"
        options={{
          title: 'Builder',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'mode-edit' : 'mode-edit'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="preview"
        options={{
          headerShown: false, // Hide the header for this screen
          title: 'Preview',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'eye' : 'eye-outline'} color={color} size={24} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="createform"
        options={{
          title: 'CreateForm',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'pluscircleo' : 'pluscircle'} color={color} size={24} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="createform" // Give it a dummy name, as it won't render a real screen
        options={{
          title: 'CreateForm', // No title
          tabBarIcon: ({ color }) => (
            // The icon for the actual button
            <AntDesign name="pluscircle" color={color} size={30} />
          ), // IMPORTANT: Prevents the tab from navigating to a route directly
          tabBarButton: (props) => (
            <CreateFormTabButton {...props} onPress={() => router.push('/settings')}>
              <AntDesign name="pluscircle" color="#ffd33d" size={30} />
            </CreateFormTabButton>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="create" // Dummy screen name for the button
        options={{
          title: '', // No title for this tab
          tabBarLabel: () => null, // Hide label
          tabBarIcon: () => null,
          tabBarButton: () => (
            <CreateFormButton onPress={() => {router.navigate('../form-questions-modal')}}>
              <Ionicons name='add' size={24} color="white"/>
            </CreateFormButton>
          )
        }}
      />
      <Tabs.Screen
        name="submit"
        options={{
          headerShown: false,
          title: 'Submit',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'send' : 'send-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({
//   createFormButtonWrapper: {
//     top: -20, // Adjust this value to control how much it's "lifted"
//     justifyContent: 'center',
//     alignItems: 'center',
//     // Shadow properties for Android and iOS
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 8,
//       },
//     }),
//   },
//   createFormButton: {
//     width: 60, // Size of the circular button background
//     height: 60,
//     borderRadius: 30, // Make it a circle
//     backgroundColor: '#383c42', // Background color for the button
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

const styles = StyleSheet.create({
  createButtonContainer: {
    top: -25, // Adjust to position the button higher
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  createButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffd33d', // Blue color for the plus button
    justifyContent: 'center',
    alignItems: 'center',
  },
});