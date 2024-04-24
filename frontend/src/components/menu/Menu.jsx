import "./menu.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export function Menu(props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

    const handleMenuHover = (isHovering) => {
        setIsMenuOpen(isHovering);
    }

    return (
    	<div className="dropdown"
                onMouseEnter={() => handleMenuHover(true)}
                onMouseLeave={() => handleMenuHover(false)}
            >
                <button className="dropbtn">Menu</button>
                <div className="dropdownOptions">
                    {isMenuOpen && (
                        <>
                            {props.isLoggedIn && 
                            <>
                            	<Link to={`user`}><button>User</button></Link>
                            	<Link to={`logout`}><button>Logout</button></Link>
                        	</>
                        	}
                        	{!props.isLoggedIn &&
                        	<>
                            <Link to={`login`}><button>Login</button></Link>
                            <Link to={`register`}><button>Register</button></Link>
                            </>
                        	}
                        </>
                    )}
                </div>
            </div>
    )

}