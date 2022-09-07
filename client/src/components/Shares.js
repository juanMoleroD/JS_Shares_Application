import React, { useState } from "react";
import { deleteShare, updateShare } from "../SharesService";
import { render } from 'react-dom'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const Shares = ({ share, removeShare, updateInput }) => {

    const [inputText, setInputText] = useState(
        {
            shareName: share.shareName,
            heldAmount: "",
            sharePurchasePrice: ""
        }
    )

    const options = {
        title: {
            text: share.shareName
        },
        chart: {
            type: 'line',
            styledMode: true
        },
        legend: {
            layout: 'vertical',
            floating: true,
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 70
        },
        xAxis: {
            categories: ['12 Weeks Ago', '11 Weeks Ago', '10 Weeks Ago', '9 Weeks Ago', '8 Weeks Ago', '7 Weeks Ago', '6 Weeks Ago', '5 Weeks Ago', '3 Weeks Ago', '2 Weeks Ago', '1 Week Ago', 'Current']
        },
        series: [{
            data: [
                parseInt(share.historicPrices["2022-09-02"]["4. close"]),
                parseInt(share.historicPrices["2022-08-26"]["4. close"]),
                parseInt(share.historicPrices["2022-08-19"]["4. close"]),
                parseInt(share.historicPrices["2022-08-12"]["4. close"]),
                parseInt(share.historicPrices["2022-08-05"]["4. close"]),
                parseInt(share.historicPrices["2022-07-29"]["4. close"]),
                parseInt(share.historicPrices["2022-07-22"]["4. close"]),
                parseInt(share.historicPrices["2022-07-15"]["4. close"]),
                parseInt(share.historicPrices["2022-07-08"]["4. close"]),
                parseInt(share.historicPrices["2022-07-01"]["4. close"]),
                parseInt(share.historicPrices["2022-06-24"]["4. close"]),
                parseInt(share.historicPrices["2022-06-17"]["4. close"]),
                share.currentPrice
            ]
        }]
    }

    const handleDelete = () => {
        deleteShare(share._id).then(() => {
            removeShare(share._id);
        })
    }

    const handleChange = (e) => {
        const editInput = Object.assign({}, inputText);
        editInput[e.target.name] = e.target.value;
        setInputText(editInput);
    }

    const handleSave = (e) => {
        e.preventDefault();
        updateShare(inputText, share._id)
            .then((data) => {
                updateInput(data, share._id)
            })
    }

    const totalValue = share.currentPrice * share.heldAmount
    const percentage = (((share.currentPrice - share.sharePurchasePrice) / share.sharePurchasePrice) * 100).toFixed(2)
    const investedAmount = share.sharePurchasePrice * share.heldAmount
    const profitLoss = totalValue - investedAmount

    return (
        <div className="individualshare">
            <div className="handleshare">
                <p className="nameofshare"><b>{share.shareName}</b>  </p>
                <p><b>Amount:</b> {share.heldAmount}</p>
                <input placeholder="Edit Amount Purchased" onChange={handleChange} name="heldAmount"></input>
                <p><b>Purchase Price:</b> {share.sharePurchasePrice}</p>
                <input placeholder="Edit Purchase Price" onChange={handleChange} name="sharePurchasePrice"></input>
                <p><b>Current Price: </b> {share.currentPrice}$</p>
                <p><b>24h/Change: </b>{percentage}% </p>
                <p><b>Total Value: </b>{totalValue}$</p>
                <p><b>Profit/Loss: </b>{profitLoss}$</p>
                <p><button className="button" onClick={handleSave}>Save </button>

                    <button className="button" onClick={handleDelete}>    🗑</button> </p>

            </div>
            <br></br>
            <div className="shares-display">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Shares;