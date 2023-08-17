import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IconNav.css';
import AccountButton from '../AccountButton/AccountButton'

//export default 
function IconNav(props) {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };

    function handleClickMovie() {
        navigate('/movies');
    }

    function handleClickSavedMovie() {
        navigate('/saved-movies');
    }

    return (
        <div className='icon'>
            <div className='icon__container'>
                <button className='icon__button' onClick={props.onClick}></button>
                <div className='icon__group'>
                    <div className='icon__links'>
                        <p className='icon__link' onClick={handleClickMain}>Главная</p>
                        <p className='icon__link icon__link_active' onClick={handleClickMovie}>Фильмы</p>
                        <p className='icon__link' onClick={handleClickSavedMovie}>Сохранённые фильмы</p>
                    </div>
                    <AccountButton className="header__group_width_small" />
                </div>
            </div>
        </div>
    );
}
    
export default IconNav;