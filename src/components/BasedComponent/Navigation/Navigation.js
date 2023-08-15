import { React, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountButton from '../Navigation/AccountButton/AccountButton'
import IconNav from '../Navigation/IconNav/IconNav'
import './Navigation.css';
import picture from '../../../images/nav.svg'

//export default 
function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const [iconOpen, setIconOpen] = useState(false);

    const openPopup = () => {
        setIconOpen(true);
    };

    const closePopup = () => {
        setIconOpen(false);
    };

    let headerNav;

    function handleClickMovie() {
        navigate('/movies');
    }

    function handleClickSavedMovie() {
        navigate('/saved-movies');
    }

    function handleClickRegistration() {
        navigate('/signup');
    }

    function handleClickLogin() {
        navigate('/signin');
    }
    
    if (location.pathname === '/') {
        headerNav = (
            <>
                <nav className="header__nav">
                    <button className="header__registration" onClick={handleClickRegistration}>Регистрация</button>
                    <button className="header__login" onClick={handleClickLogin}>Войти</button>
                </nav>
            </>
        )
    } else {
        headerNav = (
            <>
                <nav className="header__movies">
                    <p className="header__movie header__movie_type_active" onClick={handleClickMovie}>Фильмы</p>
                    <p className="header__movie" onClick={handleClickSavedMovie}>Сохранённые фильмы</p>
                </nav>
                <AccountButton className="header__group_screen_normal" />
                {!iconOpen ? (
                    <img
                        className="header__picture"
                        src={picture}
                        alt="линии"
                        onClick={openPopup}
                    />
                ) : (
                    <IconNav onClick={closePopup} />
                )}
            </>
        )
    }
    return headerNav;
  }
    
export default Navigation;