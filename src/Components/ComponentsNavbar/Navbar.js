import React from 'react';
import { Link } from 'react-router-dom';
import './navbar__style.css';
import brandImg from './brandLogo.png';

// Thanks for the logo - <a target="_blank" href="https://icons8.com/icon/SVUqR31B1Sl9/stock">Stock</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

function Navbar(){
    return(
        <nav className='rounded'>
            <div className='container-fluid customNavbar'>
                <div className='navbar navbar-light'>
                    <Link to='/' className='navbar-brand'><img alt="Company Logo" src={brandImg} height='45px'></img></Link> 
                </div>
                <div className='myCustomNavMenu'>
                    <Link to='/'>Home</Link> 
                    <Link to='#'>About</Link>
                    <Link to='/login'>Learn</Link>
                    <Link to='/course'>Courses</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;