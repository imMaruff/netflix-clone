import React from 'react'
import './Navbar.css';
import logo from "../../assets/assets/logo.png";
import search_icon from "../../assets/assets/search_icon.svg";
import bell_icon from "../../assets/assets/bell_icon.svg";
import profile from "../../assets/assets/profile_img.png";
import caret_icon from "../../assets/assets/caret_icon.svg";

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-left'>
                    <img src={logo} alt="Logo" />
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by language</li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <img src={search_icon} alt="search_icon" className='icons' />
                    <p>Children</p>
                    <img src={bell_icon} alt="bell_icon" className='icons' />
                    <div className='navbar-profile'>
                        <img src={profile} alt="profile" className='profile' />
                        <img src={caret_icon} alt="caret_icon" />
                        <div className='dropDown'>
                            <p>Sign out of Netflix</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar;