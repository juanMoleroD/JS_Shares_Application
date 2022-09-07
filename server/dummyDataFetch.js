const API_Key = "";
<<<<<<< HEAD

=======
>>>>>>> b350aaa (final pass to clean code)
const Weekly_series = "function=TIME_SERIES_WEEKLY"

const shares1 = [
    "IBM", "GOOG", "AAPL", "TSLA", "AMZN"
]
const shares2 = [
    "MSFT", "META", "ORCL", "ADBE", "CSCO"
]
const shares3 = [
    "PYPL", "NFLX", "SONY", "ABNB", "UBER"
]

const addShareData = (shareName) => {
    fetch(`https://www.alphavantage.co/query?${Weekly_series}&symbol=${shareName}&apikey=${API_Key}`)
    .then(result => result.json())
    .then(response => {
        fetch(`http://localhost:9000/api/dummySharesWeekly`, 
            {
                method: "POST",
                body: JSON.stringify(response),
                headers: { 'Content-Type': 'application/json'}
            }
        )
    }); 
}

sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

getAllShares = async () => {
    shares1.forEach(share => addShareData(share));
    await sleep(61000); 
    shares2.forEach(share => addShareData(share));
    await sleep(61000); 
    shares3.forEach(share => addShareData(share));	
}

getAllShares();