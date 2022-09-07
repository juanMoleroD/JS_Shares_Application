import React from "react";

const Account = () => {

    return (
        <div className="account">
            <section className="details">
                <h2>
                    Personal Details
                </h2>
                <p>Name: Ben Robert</p>
                <p>Email: BenRoberts@codeclan.com</p>
                <p>Password: ****** <button> Change Password </button></p>
                <p className="upgradebutton">Membership: Free <button className="upgradebutton"><a href="https://www.alphavantage.co/support/#"> Upgrade Membership</a></button></p>
            </section>
            <section className="details">
                <h2>
                    Bank Details
                </h2>
                <p>Bank Name: Starling</p>
                <p>Bank Account Number: 23-41-**-** <button> Change Account Number </button></p>
                <p>Sort-Code: 80-75-60<button> Change Sort-Code </button></p>
            </section>
            <section className="details">
                <h2>Subscription</h2>
                <p>Email Newsletter <input type="checkbox" /></p>
                <p>Text <input type="checkbox" /></p>
                <p>Post <input type="checkbox" /></p>
                <p><button> Unsubscribe</button></p>
            </section>
        </div>
    )
}

export default Account;