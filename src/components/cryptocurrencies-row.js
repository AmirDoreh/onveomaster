import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Storage from "../models/storage";
import {useNavigation} from "@react-navigation/native";
import { removeCryptocurrencies, addCryptocurrencies } from "../store/slices/items/cryptocurrencies-slice";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

let CryptocurrenciesRow = ({ item, addCryptocurrencies, removeCryptocurrencies }) => {
    const storage = new Storage();
    // const dispatch = useDispatch();

    const add = async () => {
        if(item.added !== true) {
            await storage.addItem({
                name: item.name,
                id: item.id
            });
            addCryptocurrencies(await storage.getList());
        } else {
            // storage

            let symbols = await storage.removeItem(item.id);
            removeCryptocurrencies(symbols);
        }
    }

    return(
        <View style={styles.row}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity onPress={add} style={[styles.add, {backgroundColor: item.added !== true ? "#385775" : "red"}]}>
                <Text style={{textAlign: "center", color: "white"}}>{item.added !== true ? "+ Add to Dashboard" : "- remove to Dashboard"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
        marginLeft: 20,
        marginRight: 20
    },
    add: {
        width: 200,
        padding: 5,
        marginTop: 15,
        marginBottom: 5
    }
})


CryptocurrenciesRow = connect(null, {removeCryptocurrencies, addCryptocurrencies})(CryptocurrenciesRow);
export default CryptocurrenciesRow;