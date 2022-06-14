import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header className='header'>
                <Link to="/home"><h1>Home</h1></Link>
                <Link to="/contact"><h1>Contact</h1></Link>
            </header>
        </>
    )
}

export default Header;
