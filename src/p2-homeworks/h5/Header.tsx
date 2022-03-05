import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Router";



function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR}>junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>


        </div>
    )
}

export default Header
