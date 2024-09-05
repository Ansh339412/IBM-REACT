// ProductListing.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const plants = [
  // Sample plant data
  { id: '1', name: 'RoseMary', price: 10, description: 'A beautiful plant of rosemary.', category: 'Category 1', image: require('./rosemary.JPG')} 
  // Add more plants
];

const ProductListing = ({ navigation }) => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (plant) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      newCart[plant.id] = (newCart[plant.id] || 0) + 1;
      return newCart;
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <View style={styles.plantContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(item)}
              disabled={cart[item.id] > 0}
            >
              <Text style={styles.buttonText}>{cart[item.id] > 0 ? 'Added' : 'Add to Cart'}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('ShoppingCart', { cart })}
      >
        <Text style={styles.cartText}>Cart ({Object.values(cart).reduce((a, b) => a + b, 0)})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  plantContainer: { marginBottom: 20 },
  image: { width: 100, height: 100 },
  name: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14 },
  price: { fontSize: 16, color: 'green' },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff' },
  cartButton: { marginTop: 20, backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  cartText: { color: '#fff', fontSize: 18 }
});

export default ProductListing;
