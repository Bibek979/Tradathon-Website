import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

export default function Footer() {
    return(
        <footer>
            <div className="footerTop">
                <Link to='/'>Home</Link>
                <Link to='#'>Features</Link>
                {/* <Link to='#'>Pricing</Link> */}
                <Link to='#'>FAQs</Link>
                <Link to='#'>About</Link>
                <Link to='admindashboard'>Admin</Link>
            </div>
            <div className="footerBottom">
                <p>&copy;2022 Tradathon Investing Company, Inc</p>
            </div>
        </footer>
    )
}