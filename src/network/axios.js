import axios from "axios";

export default axios.create({
    baseURL: "https://data.messari.io/api/v1/"
});
