import {API_key} from "./API_key";
const DEV_MODE = true;

let baseURL;
if (DEV_MODE) {
    baseURL = "http://localhost:9000/api/dummySharesWeekly"
} else {
    baseURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=";
}

const serverURL = "http://localhost:9000/api/portfolio"
const API_authorization = "&apikey=" + API_key;
const API_Search = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=`

export const getSharePrice = (shareName) => {
    let query;
    if (DEV_MODE) {
        query = `${baseURL}/${shareName}`
    } else {
        query = `${baseURL}${shareName}${API_authorization}`
    }
    return fetch(query)
            .then(response => response.json())
};

export const getPortfolio = () => {
    return fetch(serverURL)
                .then(response => response.json())
};

export const deleteShare = (id) => {
    return fetch(serverURL + '/' + id ,{
        method: 'DELETE'
    })
};

export const updateShare = (share, id) =>{
    return fetch(serverURL + '/' + id, {
        method: "PUT",
        body: JSON.stringify(share),
        headers: { 'Content-Type': 'application/json'}
    })
};

export const postShare =(share) => {
    return fetch(serverURL, {
        method: "POST",
        body: JSON.stringify(share),
        headers: {'Content-Type' : 'application/json'}
    })
};

export const searchSymbol = (searchParam) => {
    return fetch(API_Search + `${searchParam}${API_authorization}`)
    .then(res => res.json())
}