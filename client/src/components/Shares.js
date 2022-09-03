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
            data:  [1, 2, share.sharePurchasePrice, 4, 3, 6, 7, share.currentPrice, 8, 6, 9]
        }]
    }
    return (





        <div>
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