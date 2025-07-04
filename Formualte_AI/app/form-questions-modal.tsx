import React,{createContext} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';

const { height } = Dimensions.get('window');
let globalCounter = 0;

export default function CreateOptionsModal() {
//   const [counter, setCounter] = React.useState(0);
  // Generic handler for creating various form fields.
  // You would typically pass a 'type' parameter to the target screen
  // to indicate which kind of input to render.
  const handleCreateFormField = (type: string) => {
    globalCounter += 1;
    console.log(`Creating form field of type: ${type} with ID: ${globalCounter}`);
    router.back();
    router.navigate({ pathname: './(forms)/create-form', params: { fieldType: type, ids: globalCounter } });
  };


  // Handler for new types that might need dedicated screens or different logic
  const handleCreateSpecialOption = (type: string) => {
    if (type === 'Star Rating') {
      router.push('./(forms)/create-star-rating');
    } else if (type === 'Smile Rating') {
      router.push('./(forms)/create-smile-rating');
    }
    // Add more conditions for other 'NEW' types if they have unique paths
  };

  const handleBackgroundPress = () => {
    router.back();
  };

  interface Option {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap | keyof typeof MaterialIcons.glyphMap | keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    icontype: 'MaterialCommunityIcons' | 'MaterialIcons' | 'Ionicons';
  }

  const iconMap = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
  };

  const options: Option[] = [
    {
      title: 'Short Answer',
      icon: 'short-text',
      onPress: () => handleCreateFormField('Short Answer'),
      icontype: 'MaterialIcons',
    },
    {
      title: 'Email',
      icon: 'email-outline',
      onPress: () => handleCreateFormField('Email'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Long Answer',
      icon: 'text-long',
      onPress: () => handleCreateFormField('Long Answer'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Number',
      icon: 'numeric',
      onPress: () => handleCreateFormField('Number'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Multiple Choice',
      icon: 'format-list-bulleted',
      onPress: () => handleCreateFormField('Multiple Choice'), // Can also be for quizzes
      icontype: 'MaterialIcons',
    },
    {
      title: 'Multiple Choice Grid',
      icon: 'grid', // Or 'view-grid-outline'
      onPress: () => handleCreateFormField('Multiple Choice Grid'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Checkbox Grid',
      icon: 'checkbox-multiple-outline', // Or 'grid' + 'checkbox' combination
      onPress: () => handleCreateFormField('Checkbox Grid'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Checkboxes',
      icon: 'checkbox-marked-outline',
      onPress: () => handleCreateFormField('Checkboxes'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Dropdown',
      icon: 'arrow-down-drop-circle-outline',
      onPress: () => handleCreateFormField('Dropdown'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Linear Scale',
      icon: 'ruler', // Or 'tune' or 'scale-linear'
      onPress: () => handleCreateFormField('Linear Scale'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Star Rating',
      icon: 'star-outline',
      onPress: () => handleCreateSpecialOption('Star Rating'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Smile Rating',
      icon: 'emoticon-outline', // Or 'happy-outline' from Ionicons
      onPress: () => handleCreateSpecialOption('Smile Rating'),
      icontype: 'MaterialCommunityIcons',
    },
    {
      title: 'Time',
      icon: 'access-time',
      onPress: () => handleCreateFormField('Time'),
      icontype: 'MaterialIcons',
    },
    {
      title: 'Date',
      icon: 'calendar-today',
      onPress: () => handleCreateFormField('Date'),
      icontype: 'MaterialIcons',
    },
    {
      title: 'File Upload',
      icon: 'cloud-upload-outline',
      onPress: () => handleCreateFormField('File Upload'),
      icontype: 'MaterialCommunityIcons',
    },
    // You can add other 'NEW' options here as you define their types and handlers
    // For example, if 'NEW' meant a specific type of logic or content:
    // {
    //   title: 'Image Picker',
    //   icon: 'image-plus',
    //   onPress: () => handleCreateFormField('Image Picker'),
    //   icontype: 'MaterialCommunityIcons',
    // },
  ];

  const renderOption = ({ item }: { item: Option }) => {
    const IconComponent = iconMap[item.icontype];
    return (
      <TouchableOpacity style={styles.optionCard} onPress={item.onPress}>
        <IconComponent name={item.icon as any} size={30} color="#007AFF" />
        <Text style={styles.optionTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
          }}
        />
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.title}
            contentContainerStyle={styles.flatListContent}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            // Enable scrolling if there are many items
            // You might want to adjust maxHeight to ensure FlatList becomes scrollable
            // if content overflows
            showsVerticalScrollIndicator={false} // Hide scroll indicator if desired
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#25292e',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    maxHeight: height * 0.75, // Increased max height to accommodate more options
    width: '100%',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20, // Add some padding at the bottom of the scrollable content
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  optionCard: {
    flexDirection: 'row',
    backgroundColor: '#3a3f44',
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '45%', // Adjusted for 2 columns with spacing
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  optionTitle: {
    fontSize: 12, // Slightly adjusted font size
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'auto', // Center text for better alignment
  },
});