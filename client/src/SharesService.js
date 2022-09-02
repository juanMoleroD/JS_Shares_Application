import {API_key} from "./API_key";

const baseURL = "https://www.alphavantage.co/query?function=";
const weeklyData = "TIME_SERIES_WEEKLY&symbol=";
const API_authorization = "&apikey=" + API_key;


export const getShares = () => {
    return fetch(baseURL + weeklyData + "TSLA" + API_authorization)
            .then(response => response.json())
}