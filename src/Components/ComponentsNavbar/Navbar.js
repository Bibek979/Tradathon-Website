import React from 'react';
import { Link } from 'react-router-dom';
import './navbar__style.css';
import brandImg from './brandLogo.png';
import { useRef } from 'react';
import { AdminLoggedIn } from '../../Helper/Context';
import { IsLoggedIn } from '../../Helper/Context';
import { useContext } from 'react';
// Thanks for the logo - <a target="_blank" href="https://icons8.com/icon/SVUqR31B1Sl9/stock">Stock</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

function Navbar(){
    const myRef = useRef(null);
    const userLogin = useContext(IsLoggedIn);
    const adminLogin = useContext(AdminLoggedIn);
    console.log(adminLogin.adminLogin);
    console.log(userLogin.userLogin);
    const executeScroll = () =>
        myRef.current.scrollIntoView();
    return(
        <nav className='rounded'>
            <div className='container-fluid customNavbar'>
                <div className='navbar navbar-light'>
                    <Link to='/' className='navbar-brand'><img alt="Company Logo" src={brandImg} height='45px'></img></Link> 
                </div>
                <div className='myCustomNavMenu'>
                    <Link to='/'>Home</Link> 
                    <Link to={myRef} onClick={executeScroll}>About</Link>
                    <Link to='/learn'>Learn</Link>
                    <Link to='/course'>Courses</Link>
                    {
                        (userLogin.userLogin === true || adminLogin.adminLogin === true) ? 
                        ((userLogin.userLogin === true) ?  (<Link to='/signup'>User LoggedIn</Link>) : 
                        (<Link to='/signup'>AdminLogged In</Link>)) : (<Link to='/signup'>Sign Up</Link>)
                    }
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;