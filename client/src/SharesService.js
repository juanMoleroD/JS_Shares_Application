import {API_key} from "./API_key";

const serverURL = "http://localhost:9000/api/portfolio/"
const baseURL = "https://www.alphavantage.co/query?function=";
const weeklyData = "TIME_SERIES_WEEKLY&symbol=";
const API_authorization = "&apikey=" + API_key;


export const getSharePrice = (shareName) => {
    const query = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${shareName}${API_authorization}`
    return fetch(query)
            .then(response => response.json())
            .then(data => data["Weekly Time Series"]["2022-09-02"]["4. close"])
}

export const getPortfolio = () => {
    return fetch(serverURL)
                .then(response => response.json())
}


export const deleteShare = (id) => {
    return fetch(serverURL + id ,{
        method: 'DELETE'
    })
}