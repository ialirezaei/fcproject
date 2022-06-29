import React from 'react';
import Navitems from '../Navitems/Navitems';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar ">
            <nav>
                <Navitems />
            </nav>
        </header>
    )
}

export default Navbar;