import React from 'react';
import { Link } from 'react-router-dom';
import './navbar__style.css';
import brandImg from './brandLogo.png';

// Thanks for the logo - <a target="_blank" href="https://icons8.com/icon/SVUqR31B1Sl9/stock">Stock</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

function LogedInNavbar(){
    return(
        <nav className='rounded'>
            <div className='container-fluid customNavbar'>
                <div className='navbar navbar-light'>
                    <Link to='/' className='navbar-brand'><img alt="Company Logo" src={brandImg} height='45px'></img></Link> 
                </div>
                <div className='myCustomNavMenu'>
                    <Link to='/'>Home</Link> 
                    <Link to='#'>About</Link>
                    <Link to='/userdashboard'>Learn</Link>
                    <Link to='/course'>Courses</Link>
                    <Link to='/login'>Log out</Link>
                </div>
            </div>
        </nav>
    )
}

export default LogedInNavbar;