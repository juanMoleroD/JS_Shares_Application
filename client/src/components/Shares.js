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
    return (

        <div className="shares-display">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />

                <li>
                    {share.shareName} - {share.heldAmount} - bough at: {share.sharePurchasePrice}
                    - current price: {share.currentPrice}
                </li>
        </div>
    )
}

export default Shares;