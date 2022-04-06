
import { NavLink } from 'react-router-dom'
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <NavLink to = '/'>
                    <li>HOME</li>
                </NavLink>

                <NavLink to= '/breweries'>
                    <li>BREWERIES</li>
                </NavLink>

                <NavLink to = '/news'>
                    <li>NEWS</li>
                </NavLink>

                <NavLink to = '/about'>
                    <li>ABOUT US</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Header;