import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './header.css'
import { ConMenu } from "../../containers/Auth"
import { Navbar } from "../navbar/Navbar";

export function Header() {
    const [isNavbar, setIsNavbar] = useState(false);

    const handleButtonClick = () => {
        setIsNavbar(true)
    }

    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <a href="/">
                    <img src="/images/logos/logo.jpg" alt="Logo" />
                </a>
            </div>
            <div className="buttonsContainer">
                <button onClick={handleButtonClick}>Show navbar</button>
            </div>    
            <ConMenu />
            {isNavbar &&
            <Navbar />
            }
        </div>
    );
}
