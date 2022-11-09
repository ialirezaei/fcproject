import React from 'react';
import './Navitems.css';
import Navitem from '../Navitem/NavItem';

const Navitems = (props) => {
    return (
        <ul className="nav-items">
            <Navitem name="Home" link="/" >Shopping</Navitem>
            <Navitem name="checking" link="/myAccount" >My Account</Navitem>
            
        </ul>
    )
}

export default Navitems
