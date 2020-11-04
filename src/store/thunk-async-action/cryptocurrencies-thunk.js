// Asynchronous thunk action
import AxiosInstance from "../../network/axios";
import {cryptocurrencies} from "../slices/items/cryptocurrencies-slice";
import { ASSETS_URL } from "../../network/url";
import { loading } from "../slices/items/loading-slice";
import Storage from "../../models/storage";

export function fetchCryptocurrencies() {
    return async dispatch => {
        dispatch(loading(true))
        try {
            // AxiosInstance2().request();
            const response = await AxiosInstance.get(ASSETS_URL)

            let storage = new Storage();
            let symbols = await storage.getList();

            dispatch(cryptocurrencies({
                list: response.data,
                symbols: symbols
            }));

            dispatch(loading(false))
        } catch (error) {
            dispatch(loading(true))
        }
    }
}