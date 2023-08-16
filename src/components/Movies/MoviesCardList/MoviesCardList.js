import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movieCard from '../../../images/pic.svg';

//export default 
function MoviesCardList() {
  const location = useLocation();
  const [elseButton, setElseButton] = useState(false);
  const movie = {
    movieTitle: '33 слова о дизайне',
    movieDuration: '1ч42м',
    movieCard,
  };

  const movies = Array.from({ length: 16 }, () => movie);
  const savedMovies = Array.from({ length: 3 }, () => movie);

  useEffect(() => {
    if ((location.pathname === '/movies') && (movies.length < 16)) {
      setElseButton(false);
    } else if (
      (location.pathname === '/saved-movies') &&
      (savedMovies.length < 16)
    ) {
      setElseButton(false);
    } else {
      setElseButton(true);
    }
  }, [location.pathname, movies.length, savedMovies.length]);

  const moviesRender = (movies) => {
    let maxMoviesToShow = 16;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 850) {
      maxMoviesToShow = 8;
    }
    if (screenWidth <= 450) {
      maxMoviesToShow = 5;
    }

    const slicedMovies = movies.slice(0, maxMoviesToShow);

    return slicedMovies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movieTitle={movie.movieTitle}
          movieDuration={movie.movieDuration}
          movieCard={movie.movieCard}
        />
    ));
  }

  return (
    <section className="cards">
      <div className="cards__container">
        {location.pathname === '/movies'
          ? moviesRender(movies)
          : moviesRender(savedMovies)
        }
      </div>
      {elseButton && (
        <button className="cards__button" type="button">Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;