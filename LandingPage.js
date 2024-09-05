// LandingPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./backgroundimg.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Saini Nursery</Text>
        <Text style={styles.description}>Welcome to Saini Nursery, your one-stop shop for beautiful houseplants.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductListing')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { width: '100%', height: '100%', position: 'absolute' },
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  title: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
  description: { fontSize: 18, color: '#fff', marginVertical: 20, textAlign: 'center' },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 18 }
});

export default LandingPage;
