import React from 'react';
import './Navitem.css';
import {Link } from 'react-router-dom'

const Navitem = (props) => {
    return (
        <li className="nav-item">
            <Link to={props.link}>{props.name}</Link>
        </li>
    )
}

export default Navitem;