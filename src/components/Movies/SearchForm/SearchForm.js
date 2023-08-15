import React from 'react';
import './SearchForm.css';

//export default 
function SearchForm() {
    return (
        <section className="form">
            <form autoComplete="off" className="form__search">
                <input autoComplete="off" className="form__input" required id="movie" name="movie" type="text" placeholder="Фильм" />
                <button type="submit" className="form__button"></button>
            </form>
            <div className="shortmovies">
                <p className="shortmovies__title">Короткометражки</p>
                <button className="shortmovies__button"></button>
            </div>
        </section>
    );
}

export default SearchForm;