import React from 'react';
import logo from "../images/logo1.svg";

const Navbar = () => {
    return (
        <nav className='nav'>

            <div className="item">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul>
                        <li>|</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                
            </div>
            <div className='button'>
                <button>
                    Submit a Request
                </button>
            </div>
            
        </nav>
    );
};

export default Navbar;
