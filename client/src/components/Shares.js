import React, { useState } from "react";
import { deleteShare, updateShare } from "../SharesService";
import { render } from 'react-dom'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'




const Shares = ({ share, removeShare, updateInput}) => {

    const [inputText, setInputText] = useState(
        {   
            shareName: share.shareName,
            heldAmount: "",
            sharePurchasePrice:""
        }
    )

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

    const handleChange = (e) =>{

        const editInput = Object.assign({}, inputText);
        editInput[e.target.name] = e.target.value;
        setInputText(editInput);
    }

    const handleSave = (e) =>{
        e.preventDefault();
        updateShare(inputText, share._id)
        .then((data) =>{
            updateInput(data, share._id)
        })
    }

    const totalValue = share.currentPrice * share.heldAmount
    const percentage = (((share.currentPrice - share.sharePurchasePrice)/share.sharePurchasePrice)*100).toFixed(2)
    const investedAmount = share.sharePurchasePrice * share.heldAmount
    const profitLoss = totalValue - investedAmount

 

  

    return (



        <div className="individualshare">

       

                {/* <table className="table">
                    <tbody className="tbody">
                        <tr className="title">
                            <th>
                                <b>Name: </b>
                            </th>
                            <th>
                                <b>Amount: </b><input onChange={handleChange} name="heldAmount"></input>
                            </th>
                            <th>
                                <b>Purchase Price: </b><input onChange={handleChange} name="sharePurchasePrice"></input>
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
                            <td><button onClick={handleSave}>Save</button></td>
                            <td className="buttonBox"><button onClick={handleDelete} className="btn">🗑</button></td>
                        </tr>
                    </tbody>

                </table>
 */}
<form className="handleshare">
    <p>Name:{share.shareName} </p>
    <p>Amount:{share.heldAmount}<input onChange={handleChange} name="heldAmount"></input> </p>
     <p>Purchase Price:{share.sharePurchasePrice}$<button >+</button><button>-</button> </p>
    <p>Current Price: {share.currentPrice}$</p>
    <p>24 Hour Change:{percentage}% </p>
    <p>Total Value:{totalValue}$</p>
                            <p>Profit/Loss:{profitLoss}$</p>
    <button onClick={handleSave}>Save</button>
    <button onClick={handleDelete} className="btn">🗑</button>
    
</form>
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