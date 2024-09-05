// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';
import Header from './Header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen 
          name="ProductListing" 
          component={ProductListing} 
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} cartCount={Object.values(cart).reduce((a, b) => a + b, 0)} />
          })}
        />
        <Stack.Screen 
          name="ShoppingCart" 
          component={ShoppingCart} 
          options={({ route, navigation }) => ({
            header: () => <Header navigation={navigation} cartCount={Object.values(route.params.cart).reduce((a, b) => a + b, 0)} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
