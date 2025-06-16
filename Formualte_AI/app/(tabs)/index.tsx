import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

const NoFormImage = require('@/assets/images/surveyor.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={NoFormImage} style={styles.image} />
      </View>
      <Text style={styles.text}>No Form Available !</Text>
      <View style={styles.usetemplateContainer}>
        <Ionicons name="document-text-sharp" size={24} color="black" />
        <Link href="/createform" style={styles.button}>
        Use Templates
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:0,
    paddingBottom:20

  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 0,
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usetemplateContainer: {
    marginTop: 10,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start of the row
    gap: 5, // Add space between the icon and the text
  }
});
