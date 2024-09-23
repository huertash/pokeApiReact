import React from "react";
import "../styles/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = ({links}) => {
    return(
        <nav className="navbar">
            <ul>
                {links.map((link,index)=>(
                    <li key={index}>
                        <Link to ={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar