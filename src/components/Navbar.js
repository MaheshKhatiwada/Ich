import React from 'react';
import {Link} from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
           <nav>
               <ul className="navbar__list">
                   <li className="navbar__item"><Link to="/" >IntraCranial Haemorrhage Detection</Link>
                   </li>
                   <li className="navbar__item"><Link to="/home" >Home </Link></li>
                   <li className="navbar__item"><Link to="/analyse"  >Analyse </Link></li>
                   <li className="navbar__item"><Link to="/about">About </Link></li>
                   <li className="navbar__item"><Link to="/contact" >Contact</Link></li>
               </ul>
           </nav>
        </div>
    )
}

export default Navbar;