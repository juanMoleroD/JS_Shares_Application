import React from "react";

const Account = ()=> {


    return(

        <div>
        <section>
            <h2>
                Account Holder Details
            </h2>
            <p>Name: Ben Robert</p>
            <p>Email: BenRoberts@codeclan.com</p>
            <p>Password: ****** <button> Change Password </button></p>
    
          <p className="upgradebutton">Membership: Free <button className="upgradebutton"><a href="https://www.alphavantage.co/support/#"> Upgrade Membership</a></button></p>
         
        </section>

        </div>
    )
}

export default Account;