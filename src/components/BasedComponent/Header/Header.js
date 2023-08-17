import React from 'react';
import headerLogo from '../../../images/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

//export default 
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  let header;

  function handleClickLogo() {
    if (location.pathname !== '/profile') {
      navigate('/');
    }
  }

  if ((location.pathname === '/signin') || (location.pathname === '/signup')) {
    header = (
      <>
        <header className="header header__type_sign">
          <img className="header__logo" onClick={handleClickLogo} src={headerLogo} alt="Лого" />
        </header>
      </>
    )
  } else {
      header = (
        <>
          <header className="header header__type_page">
            <img className="header__logo" onClick={handleClickLogo} src={headerLogo} alt="Лого" />
            <Navigation />
          </header>
        </>
      )
  } 
  return header;
}
    
export default Header;