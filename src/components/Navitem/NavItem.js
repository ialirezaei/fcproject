import React from 'react';
import './Navitem.css';


const Navitem = (props) => {
    return (
        <li ClassName="nav-item">
            <a href={props.link}>{props.name}</a>
        </li>
    )
}

export default Navitem;