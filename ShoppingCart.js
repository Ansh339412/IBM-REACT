// ShoppingCart.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ShoppingCart = ({ route, navigation }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);

  const calculateTotal = () => {
    return Object.entries(cartItems).reduce((total, [id, quantity]) => {
      const plant = plants.find(p => p.id === id);
      return total + (plant.price * quantity);
    }, 0);
  };

  const handleIncrease = (id) => {
    setCartItems(prevCart => ({ ...prevCart, [id]: prevCart[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setCartItems(prevCart => {
      if (prevCart[id] > 1) {
        return { ...prevCart, [id]: prevCart[id] - 1 };
      } else {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
    });
  };

  const handleDelete = (id) => {
    const newCart = { ...cartItems };
    delete newCart[id];
    setCartItems(newCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={Object.keys(cartItems)}
        renderItem={({ item }) => {
          const plant = plants.find(p => p.id === item);
          return (
            <View style={styles.itemContainer}>
              <Image source={plant.image} style={styles.image} />
              <Text style={styles.name}>{plant.name}</Text>
              <Text style={styles.price}>${plant.price}</Text>
              <Text style={styles.quantity}>Quantity: {cartItems[item]}</Text>
              <TouchableOpacity onPress={() => handleIncrease(item)} style={styles.button}>
                <Text style={styles.buttonText}>Increase</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDecrease(item)} style={styles.button}>
                <Text style={styles.buttonText}>Decrease</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item)} style={styles.button}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item}
      />
      <Text style={styles.total}>Total Cost: ${calculateTotal()}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout (Coming Soon)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductListing')}
      >
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  itemContainer: { marginBottom: 20 },
  image: { width: 100, height: 100 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green' },
  quantity: { fontSize: 16 },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, marginVertical: 5 },
  buttonText: { color: '#fff' },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 }
});

export default ShoppingCart;
