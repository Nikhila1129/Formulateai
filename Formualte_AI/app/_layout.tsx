import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';

export default function RootLayout() {
  return (
    <Fragment>
      <StatusBar style="light" hidden={false} translucent={true}/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(forms)" options={{ headerShown: false }} />
        {/* <Stack.Screen
          name="createform" // This should match the file name: `app/createform.js` or `app/createform/index.js`
          options={{
            title: 'Create Form',
            presentation: 'modal', // Key for modal presentation
            headerShown: false, // Hide the header for the modal screen itself if you want a custom one
            contentStyle: { backgroundColor: 'transparent' }, // For Android and general transparent content area
            // cardStyle: { backgroundColor: 'transparent' }, // For iOS modal transparency
          }}
      /> */}
      <Stack.Screen name="create-options-modal" options={{ presentation: 'modal', headerShown: false }} />
      <Stack.Screen name="form-questions-modal" options={{ presentation: 'modal', headerShown: false }} />
      {/* <Stack.Screen name="create-form" options={{ presentation: 'modal', title: 'New Form' }} />
      <Stack.Screen name="create-quiz" options={{ presentation: 'modal', title: 'New Quiz' }} /> */}
      </Stack>
    </Fragment>
  );
}
