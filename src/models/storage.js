import {AsyncStorage} from "react-native";

export default class Storage {

    _storage_label = "cy";

    addItem = async(symbol) => {
        //get list
        let symbols = await this.getList();

        // prevent duplicate item
        if(symbols.length !== 0) {
            let items = symbols.filter(f => f.id === symbol.id);
            if(items.length !== 0) {
                return;
            }
        }

        // add item in list
        symbols.push(symbol);

        // save
        await this.save(symbols);
    }

    removeItem = async (id) => {
        //get list
        let symbols = await this.getList();
        // add item in list
        if(symbols.length === 0) return;

        symbols = symbols.filter(f=> f.id !== id);
        console.log("symbols symbols symbols symbols symbols symbols");
        console.log(symbols);
        // save
        await this.save(symbols);

        return symbols;
    }

    save = async(symbols) => {
        // save new list
        await AsyncStorage.setItem(this._storage_label, JSON.stringify(symbols));
    }

    getList = async() => {
        try {
            const value = await AsyncStorage.getItem(this._storage_label);
            // console.log("value");
            // console.log(JSON.parse(value));

            return JSON.parse(value) ?? []
        } catch (error) {
            // Error retrieving data
        }
    }


    clear = async () => {
        await AsyncStorage.clear();
    }

}