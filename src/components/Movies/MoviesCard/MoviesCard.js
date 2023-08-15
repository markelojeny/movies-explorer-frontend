import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

//export default 
function MoviesCard(props) {
    const location = useLocation();
    return (
        <article className="card">
            <img className="card__picture" alt="Фильм" src={props.movieCard}/>
            <div className="card__group">
                <h2 className="card__title">{props.movieTitle}</h2>
                {location.pathname === '/movies'
                    ? <button className="card__like"></button>
                    : <button className="card__favorites"></button>
                }
            </div>
            <p className="card__duration">{props.movieDuration}</p>
        </article>
    );
}

export default MoviesCard;