import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Example() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/promappio.appspot.com/assets/Landing_img.jpg' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
          Économisez de l'argent {'\n'}avec{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Loum</Text>
            </View>
          </Text>
          {/* <Text style={styles.text}>
          Find the best grocery deals and save money by comparing discounts at nearby stores. </Text>        */}
          
          <TouchableOpacity
          onPress={() => {
            router.push('/LoginScreen');
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
          </View>

        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#fff2dd',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#002D62',
    borderColor: '#002D62',
    marginTop: 60
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});