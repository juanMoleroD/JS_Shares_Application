import React from "react";

import { Link } from "react-router-dom";


const NavBar = () => {


    return(
        
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/personalportfolio">Personal Portfolio</Link></li>
        <li><Link to="/projections">Projections</Link></li>
        <li><Link to="/addanewshare">Add A New Share</Link></li>
        </ul>

    )
}

export default NavBar;