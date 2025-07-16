import React, { useEffect, useRef } from 'react'
import './Navbar.css';
import logo from "../../assets/assets/logo.png";
import search_icon from "../../assets/assets/search_icon.svg";
import bell_icon from "../../assets/assets/bell_icon.svg";
import profile from "../../assets/assets/profile_img.png";
import caret_icon from "../../assets/assets/caret_icon.svg";
import { logout } from '../../firebase';

function Navbar() {


    const navRef = useRef();

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
            <div className='navbar' ref={navRef}>
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
                            <p onClick={logout}>Sign out of Netflix</p>
                        </div>
                    </div>


                </div>
            </div>
    )
}

export default Navbar;