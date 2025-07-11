import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import React, { useState, useEffect, use, useRef } from 'react';
import ShortAnswer from '../../components/short-answer';
type ElementType = { type: string | string[]; id:number };



export default function CreateFormScreen() {

  const { fieldType, ids } = useLocalSearchParams();
  const [elements, setElements] = useState<ElementType[]>([]);
  const [countelements, setCountElements] = useState(1);
  const handleDeleteQuestion = (id: number) => {
    setElements(prevElements => prevElements.filter(el => el.id !== id));
    setCountElements(countelements => countelements - 1);
  };
  // const prevElements = useRef<ElementType[]>([]);

  useEffect(() => {
    if (fieldType) {
      // prevElements.current = elements;
      setElements(elements => [
        ...elements,
        { type: fieldType, id: countelements }
      ]);
      setCountElements(countelements => countelements + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  const renderElement = (element: ElementType & { index: number }) => {
    switch (element.type) {
      case 'Short Answer':
        console.log('Rendering Short Answer Element with ID:', element.id);
        return <ShortAnswer id={element.id} index={element.index} onDelete={handleDeleteQuestion}/>;
      case 'Long Answer':
        return <Text>Long Answer Component</Text>;
      case 'multiple-choice':
        return <Text>Multiple Choice Component</Text>;
      case 'checkbox':
        return <Text>Checkbox Component</Text>;
      case 'dropdown':
        return <Text>Dropdown Component</Text>;
      default:
        return <Text>Unknown Element Type</Text>;
    }
  };

  return (
    // <View style={styles.container}>
    //   <Stack.Screen options={{ title: 'New Form', presentation: 'modal', headerShown: false }} />
    //   {/* <Text style={styles.text}>This is the Form Creation Screen!</Text> */}
    //   <View style={{styles.formtitlecontainer}}>

    //   </View>
    //   <Button title="Go Back" onPress={() => router.back()} />
    // </View>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: 'New Form', presentation: 'modal', headerShown: false }} />
        <View style={styles.optionCard}>
          <FloatingLabelInput
            label="Title"
            keyboardType="default"
            autoCapitalize="none"
          />
          <FloatingLabelInput
            label="Discription"
            keyboardType="default"
            autoCapitalize="none"
            // Add other TextInput props as needed
          />
        </View>
        <ScrollView style={{ width: '100%', backgroundColor:'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ padding: 20 }}>
          {elements.map((element, index) => (
            <View key={element.id} style={styles.questioncontainer}>
              {renderElement({ ...element, index })}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  optionCard: {
    width: '100%',
    backgroundColor: '#ffd33d',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 2, // For Android shadow
    paddingTop: 20,
  },
  questioncontainer: {
    backgroundColor:'#25292e',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  }
});