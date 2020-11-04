import {createSlice} from '@reduxjs/toolkit'
import Storage from "../../../models/storage";

const refreshSymbols = (list, symbols) => {

    let array = [];
    list.forEach(item => {
        let found = symbols.filter(f => f.id === item.id);
        if(found && found.length > 0) {
            array.push(item);
            item.added = true;
        } else {
            item.added = false;

        }
    })
    return array;
}

const cryptocurrenciesSlice = createSlice({
    name: 'cryptocurrencies',
    initialState: {
        cryptocurrencies: [],
        cryptocurrenciesSelected: []
    },
    reducers: {
        cryptocurrencies: (state, action) => {
            let list = action.payload.list.data;
            let symbols = action.payload.symbols;
            state.cryptocurrenciesSelected = refreshSymbols(list, symbols);
            state.cryptocurrencies = list;
        },
        removeCryptocurrencies: (state, action) => {
            let symbols = action.payload;
            let items = refreshSymbols(state.cryptocurrencies, symbols);
            state.cryptocurrenciesSelected = items.length === 0 ? [] : items;
        },

        addCryptocurrencies: (state, action) => {
            let symbols = action.payload;
            state.cryptocurrenciesSelected = refreshSymbols(state.cryptocurrencies, symbols);
        },
    },
})

export const { cryptocurrencies, removeCryptocurrencies,  addCryptocurrencies} = cryptocurrenciesSlice.actions

// A selector
export const cryptocurrenciesList = state => state.cryptocurrencies.cryptocurrencies;
export const cryptocurrenciesSelected = state => state.cryptocurrencies.cryptocurrenciesSelected;

export default cryptocurrenciesSlice.reducer;


