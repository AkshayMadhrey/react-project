import React from "react";
import "./Navbar.css"
import { useState } from "react";
import { 
    FaFacebookSquare,
    FaInstagramSquare, 
    FaYoutubeSquare} 
    from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar= ()=> {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
return(
    <>
<navbar className="main-nav">

    <div className="logo">
<h1>
    <span>L</span>earn
    <span>W</span>ith
    <span>A</span>kshay
</h1>
    </div>

    <div className= {
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
<ul>
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#">About</a>
    </li>
    <li>
        <a href="#">Services</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
</ul>
    </div>
    <div className="social-media">
        <ul className="social-media-desktop">
            <li>
                <a href="https://www.youtube.com/@akshaymadhrey2072" 
                target="_madhrey">
                <FaYoutubeSquare className="youtube"/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/akshay.madhrey" 
                target="_madhrey">
                <FaFacebookSquare className="facebook" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_akshayy19/" 
                target="_madhrey">
                <FaInstagramSquare className="instagram"/>
                </a>
            </li>

        </ul>
        <div className="hamburger-menu"> 
        <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
        <GiHamburgerMenu />
        </a>
        </div>

    </div>
</navbar>
<section className="hero-section">
    <p>Welcome to </p>
    <h1>My page</h1>
</section>
    </>
)


}
export default Navbar;