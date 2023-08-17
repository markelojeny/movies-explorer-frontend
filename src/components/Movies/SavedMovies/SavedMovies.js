import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../../BasedComponent/Header/Header';
import Footer from '../../BasedComponent/Footer/Footer';

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