import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <nav>
        <ul style={{display: "flex", listStyle: "none", gap: "1.5rem", textAlign: "left"}}>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/about">About Me</Link>
            </li>
            <li><Link to = "/resume">Resume</Link></li>
            <li><Link to = "/projects">Projects</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
        </ul>
    </nav>
}

export default Navbar;