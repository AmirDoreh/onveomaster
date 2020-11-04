import React, {useEffect} from "react";
import {View, Text, ScrollView, SafeAreaView, FlatList, StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux";
import {cryptocurrenciesList} from "../../store/slices/items/cryptocurrencies-slice";
import CryptocurrenciesRow from "../../components/cryptocurrencies-row";

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const CryptocurrenciesAddScreen = () => {

    const navigation = useNavigation();
    const state = useSelector(cryptocurrenciesList);
    // const dispatch = useDispatch();

    // const choseitem = () => {
    //     console.log("chose")
    // }

    // const renderItem = (item) => {
    //     <Item title={item.name} />
    // }

    useEffect(() => {
        navigation.setOptions({title: 'cryptocurrencies'})
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                {
                    state.map((item, index) => {
                        return <CryptocurrenciesRow item={item} key={index} />
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    containerFlatList: {
        paddingBottom: 50,
        marginTop: 10
    }
})
export default CryptocurrenciesAddScreen;