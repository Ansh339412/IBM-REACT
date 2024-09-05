// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ navigation, cartCount }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductListing')}>
        <Text style={styles.link}>Products</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Saini Nursery</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
        <Text style={styles.cart}>Cart ({cartCount})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#4CAF50' },
  link: { color: '#fff' },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cart: { color: '#fff' }
});

export default Header;
