const API_Key = "J2DXV9A72P8LXA9R";
const Weekly_series = "function=TIME_SERIES_WEEKLY"

const shares = [
    "IBM", "GOOG", "APPL", "TSLA", "AMZN", 
    "MSFT", "META", "ORCL", "ADBE", "CSCO",
    "PYPL", "NFLX", "SONY", "ABNB", "UBER"
]


const addShareData = (timeSeries, shareName) => {
    fetch(`https://www.alphavantage.co/query?${timeSeries}&symbol=${shareName}&apikey=${API_Key}`)
    .then(result => result.json())
    .then(response => {
        fetch(`http://localhost:9000/api/dummyShares`, 
            {
                method: "POST",
                body: JSON.stringify(response),
                headers: { 'Content-Type': 'application/json'}
            }
        )
    }); 
    
}

addShareData(Weekly_series, "IBM");

//https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=J2DXV9A72P8LXA9R