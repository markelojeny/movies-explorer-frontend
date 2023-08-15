import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Header from '../BasedComponent/Header/Header';
import Footer from '../BasedComponent/Footer/Footer';

//export default 
function Main() {
    return (
      <>
        <Header />
        <main className="content">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
        </main>
        <Footer />
      </>
    );
  }
    
export default Main;