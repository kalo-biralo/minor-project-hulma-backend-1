import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import OrderScreen from './src/Screens/OrderScreen';
import BottomNav from './src/Navigations/BottomNav';
import CartScreen from './src/Screens/CartScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';
import ShippingScreen from './src/Screens/ShippingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden = {true} />
        <Stack.Navigator 
          initialRouteName = "Verification"
          screenOptions = {{
            headerShown: false,
          }}
          >
            <Stack.Screen name = "Verification" component = {NotVerifyScreen} />
            <Stack.Screen name = "Register" component = {RegisterScreen} />
            <Stack.Screen name = 'Login' component={LoginScreen} />
            <Stack.Screen name = 'Order' component={OrderScreen} />
            <Stack.Screen name = 'Bottom' component={BottomNav} />
            <Stack.Screen name = 'Cart' component={CartScreen} />
            <Stack.Screen name = 'Single' component={SingleProductScreen} />
            <Stack.Screen name = 'Checkout' component={PlaceOrderScreen} />
            <Stack.Screen name = 'Shipping' component = {ShippingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}
