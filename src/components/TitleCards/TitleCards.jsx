import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/assets/cards/Cards_data.js';




function TitleCards({ title, category }) {

    const [apiData,setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODMzNTgxZjM1ZmFkMjhhOWRiOTYxZTZiNDFjYTUyNyIsIm5iZiI6MTc1MjU5NjkwMy40OTIsInN1YiI6IjY4NzY4MWE3YWFmNTU3MGQ0MWEyNDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgFxGhFXUf4QppVo9HPPh8pfqCSHkYWGAlGUPtQvXoQ'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));


        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='titleCards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className='card-lists' ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <div className='card' key={index}    >
                        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
                        <p>{card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards