import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CryptocurrenciesListScreen from "./screens/cryptocurrencies/cryptocurrencies-list"
import CryptocurrenciesAddScreen from "./screens/cryptocurrencies/cryptocurrencies-add";
import {cryptocurrenciesAdd, cryptocurrenciesList} from "./models/route-const";

const Stack = createStackNavigator();
import {Provider} from "react-redux";
import {createStore} from "@reduxjs/toolkit";
import combineReducers from "./store/slices/index";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers,
    applyMiddleware(thunk)
);

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={cryptocurrenciesList} component={CryptocurrenciesListScreen}/>
                    <Stack.Screen name={cryptocurrenciesAdd} component={CryptocurrenciesAddScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
