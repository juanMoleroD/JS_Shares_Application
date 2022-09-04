import React from "react";
import { deleteShare } from "../SharesService";

import { render } from 'react-dom'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const Shares = ({ share, removeShare }) => {

    const options = {
        title: {
            text: share.shareName
        },
        series: [{
            data: [share.sharePurchasePrice, share.currentPrice]
        }]
    }

    const handleDelete = () =>{
        deleteShare(share._id).then(()=>{
            removeShare(share._id);
        })
    }

    const totalValue = share.currentPrice * share.heldAmount
    const percentage = (((share.currentPrice - share.sharePurchasePrice)/share.sharePurchasePrice)*100).toFixed(2)
    const investedAmount = share.sharePurchasePrice * share.heldAmount
    const profitLoss = totalValue - investedAmount

  

    return (



        <div className="alphaGraph">

            <div className="shares-display">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />

                <table className="table">
                    <tbody className="tbody">
                        <tr className="title">
                            <th>
                                <b>Name: </b>
                            </th>
                            <th>
                                <b>Amount: </b>
                            </th>
                            <th>
                                <b>Purchase Price: </b>
                            </th>
                            <th>
                                <b>Current Price: </b>
                            </th>
                            <th>
                                <b>24h/Change: </b>
                            </th>
                            <th>
                                <b>Total Value: </b>
                            </th>
                            <th>
                                <b>P/L: </b>
                            </th>

                        </tr>
                        <tr className="tableInfo">
                            <td>{share.shareName}</td>
                            <td>{share.heldAmount}</td>
                            <td>{share.sharePurchasePrice}$ </td>
                            <td>{share.currentPrice}$</td>
                            <td>{percentage}% </td>
                            <td>{totalValue}$</td>
                            <td>{profitLoss}$</td>
                            <td><button onClick={handleDelete}>🗑</button></td>
                        </tr>
                    </tbody>

                </table>


            </div>


        </div >


    )
}

export default Shares;