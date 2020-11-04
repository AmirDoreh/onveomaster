import React, {useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList, SafeAreaView, StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {cryptocurrenciesAdd} from "../../models/route-const";
import {fetchCryptocurrencies} from "../../store/thunk-async-action/cryptocurrencies-thunk";
import {useDispatch, useSelector} from "react-redux";
import {cryptocurrenciesSelected} from "../../store/slices/items/cryptocurrencies-slice";
import {loadingSelector} from "../../store/slices/items/loading-slice";
import cryptocurrenciesPrice from "../../components/cryptocurrencies-price";

const CryptocurrenciesListScreen = () => {

    const navigation = useNavigation();
    const state = useSelector(cryptocurrenciesSelected);
    const loading = useSelector(loadingSelector);
    const dispatch = useDispatch();

    const navigateToAdd = () => {
        navigation.navigate(cryptocurrenciesAdd);
    }

    const load = () => {
        dispatch(fetchCryptocurrencies());
    }

    useEffect(() => {
        navigation.setOptions({title: 'Crypto Tracker'})
        load();

    }, [])

    // console.log("state"/*);
    // console.log(state)*/;

    // const renderItem = ({ item }) => (
    //     <View></View>
    //     <Text>{item.name}</Text>
    // );

    // console.log(loading);

    return (
        <SafeAreaView>


            {loading === true ? <Text style={styles.loading}>Loading ...</Text> :
                <TouchableOpacity onPress={navigateToAdd} style={styles.add}>
                    <Text style={styles.text}>+ Add to Cryptocurrenc</Text>
                </TouchableOpacity>
            }
            <FlatList
                contentContainerStyle={styles.containerFlatList}
                data={state}
                renderItem={cryptocurrenciesPrice}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerFlatList: {
        paddingBottom: 50
    },
    add: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        backgroundColor: "#385775",
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        width: 200,
        textAlign: "center"
    },
    loading: {
        marginTop: 10,
        fontSize: 20,
        textAlign: "center"
    }
})

export default CryptocurrenciesListScreen;