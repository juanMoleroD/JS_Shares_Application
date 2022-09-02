import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const NavBar = () => {

    const Menu = styled.ul`
    { display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        padding: 0;
        margin: 0;
        gap: 10px;
        text-decoration: none;
        color: black;
      }`

    const MenuOptions = styled.li`
   {
    text-decoration: none;
    padding: 3px;
    color: black;
    display: block;
    border: 2px solid lightgrey;}
    
    &:hover {
       background-color: lightgrey ;
     }
   
    
    `


    return(
        
        <Menu>
        <MenuOptions><Link to="/">Home</Link></MenuOptions>
        <MenuOptions><Link to="/personalportfolio">Personal Portfolio</Link></MenuOptions>
        <MenuOptions><Link to="/projections">Projections</Link></MenuOptions>
        <MenuOptions><Link to="/addanewshare">Add A New Share</Link></MenuOptions>
        </Menu>

    )
}

export default NavBar;