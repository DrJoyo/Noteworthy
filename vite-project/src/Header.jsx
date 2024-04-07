import logo from './noteworthy-logo.png'
import Button from "./Button";
import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const headerStyle = {
        textAlign: 'left'
    }
    const logoStyle = {
        position:'absolute',
        left: '50px',
        top: '50px',
        borderRadius: '50%'
    }
    return (
        <div style={headerStyle}>
            <img src={logo} style={logoStyle}/>
            <Button text="About Us" top='80px' right='33%'></Button>
            <Button text="Videos" top='80px' right='20%'></Button>
            <Button text="Members" top='80px' right='7%'></Button>
        </div>
    )
}

export default Header