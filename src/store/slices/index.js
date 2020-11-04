import {combineReducers} from "@reduxjs/toolkit";
import cryptocurrenciesSlice from "./items/cryptocurrencies-slice";
import LoadingSlice from "./items/loading-slice";

export default combineReducers({
    cryptocurrencies: cryptocurrenciesSlice,
    loading: LoadingSlice
});