import React from "react";
import {View, Text, StyleSheet} from "react-native";

const cryptocurrenciesPrice = ({item}) => {
    const round = (number) => {
        return Math.floor(number * 100)
    }

    return (
        <View style={styles.row}>

            <View style={styles.container_row}>
                <Text style={[styles.text_left, styles.item]}>{item.name}</Text>
                <Text
                    style={[styles.text_right, styles.item]}>${round(item.metrics.market_data.price_usd)}</Text>
            </View>
            <View style={styles.container_row}>
                <Text style={[styles.text_left, styles.item]}>{item.symbol}</Text>
                <Text
                    style={[styles.text_right, styles.item, {color: item.metrics.market_data.percent_change_usd_last_24_hours < 0 ? "red" : "green"}]}>{round(item.metrics.market_data.percent_change_usd_last_24_hours)} %</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        // height: 40,
        // backgroundColor: "red",
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    container_row: {
        flex: 1, flexDirection: "row"
    },
    item: {
        flexGrow: 1,
        height: 30,
        fontSize: 18
    },
    // text: {
    //     fontsize: 16
    // },
    text_left: {
        textAlign: "left",
        // backgroundColor: "green"
    },
    text_right: {
        textAlign: "right",
        // backgroundColor: "blue"
    }
})

export default cryptocurrenciesPrice;