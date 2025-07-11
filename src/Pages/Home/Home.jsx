import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/assets/home_banner5.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
function Home() {
    return (
        <div>
            <Navbar />
            <div className='hero'>
                <img src={hero_banner} alt='hero_banner.jpeg' className='banner-img' />
                <div className='hero-cap-img'>

                    <img src={hero_title} alt='hero_title.png' className='hero_img' />
                    <p>Discovering his ties to a secret ancient order,a young man modern istanbul embarks on quest to save a city from an immortal enemy</p>

                    <div className='hero-btn'>
                        <button className='btn'><img src={play_icon}></img>Play</button>
                        <button className='btn drk-btn'><img src={info_icon}></img>More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div    className='more-cards'>
                <TitleCards title={"Blockbuster Movies"}/>
                <TitleCards title={"Only on Netflix"}/>
                <TitleCards title={"Upcoming"}/>
                <TitleCards title={"Top picks for you"}/>
            </div>
        </div>
    )
}

export default Home;