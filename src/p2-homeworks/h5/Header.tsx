import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Router";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={navClick => navClick.isActive ? s.active
                : `${s.active} ${s.passive}`}>pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={navClick => navClick.isActive ? s.active : `${s.active} ${s.passive}`}>junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={navClick => navClick.isActive ? s.active : `${s.active} ${s.passive}`}>junior-plus</NavLink>
            <div className={s.text}>наведи</div>


        </div>
    )
}

export default Header
