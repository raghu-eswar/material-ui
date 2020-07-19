import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/header.css'

function Header(props) {
    return ( 
        <header>
            <div>
                <div id="logo">{props.name}</div>
                <nav>  
                    {props.navLinks.map(link => <div className="nav-links"><Link className="nav-link">{link}</Link></div>)} 
                </nav>
            </div>
        </header>
    );
}

export default Header;