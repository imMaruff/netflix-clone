import React from 'react'
import './Footer.css'
import youtube from '../../assets/assets/youtube_icon.png'
import twitter from '../../assets/assets/twitter_icon.png'
import instagram from '../../assets/assets/instagram_icon.png'
import facebook from '../../assets/assets/facebook_icon.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-icon '>
                <img src={youtube} alt='youtue.com' />
                <img src={twitter} alt='twitter.com' />
                <img src={instagram} alt='instagram.com' />
                <img src={facebook} alt='facebook.com' />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift cards</li>
                <li>Media center</li>
                <li>Investor Relation</li>
                <li>Terms of Use</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Coorporate Information</li>
                <li>Contact us</li>
            </ul>
            <p className='copyright'>@Copyright -Netflx 2026</p>
        </div>
    )
}

export default Footer