import React from 'react';
import "../css/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
           <nav>
               <ul className="navbar__list">
                   <li className="navbar__item"><a href="/home">IntraCranial Haemorrhage Detection</a>
                   </li>
                   <li className="navbar__item"><a href="/home">Home </a></li>
                   <li className="navbar__item"><a href="/analyse">Analyse </a></li>
                   <li className="navbar__item"><a href="/about">About </a></li>
                   <li className="navbar__item"><a href="/contact">Contact</a></li>
               </ul>
           </nav>
        </div>
    )
}

export default Navbar;