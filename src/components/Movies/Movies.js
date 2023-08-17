import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
// import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm';
import './Movies.css';
import Header from '../BasedComponent/Header/Header';
import Footer from '../BasedComponent/Footer/Footer';

//export default 
function Movies() {
    return (
      <>
        <Header />
        <main className="content">
          <SearchForm />
          <MoviesCardList />
        </main>
        <Footer />
      </>
    );
}
    
export default Movies;