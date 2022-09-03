import React from "react";

import { render } from 'react-dom'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const Shares = ({ share }) => {

    const options = {
        title: {
            text: share.shareName
        },
        series: [{
            data: [share.sharePurchasePrice, share.currentPrice]
        }]
    }

    const totalValue = share.currentPrice * share.heldAmount


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
                                <b>Purchase Price:</b>
                            </th>
                            <th>
                                <b>Current Price: </b>
                            </th>
                            <th>
                                <b>Estimated Value: </b>
                            </th>

                        </tr>
                        <tr className="tableInfo">
                            <td>{share.shareName}</td>
                            <td>{share.heldAmount}</td>
                            <td>{share.sharePurchasePrice}$ </td>
                            <td>{share.currentPrice}$</td>
                            <td>{totalValue}$</td>
                        </tr>
                    </tbody>

                </table>


            </div>


        </div >


    )
}

export default Shares;