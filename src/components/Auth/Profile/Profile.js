import React from 'react';
import './Profile.css';
import Header from '../../BasedComponent/Header/Header';

//export default 
function Profile() {
    return (
        <>
            <Header />
            <section className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile__form'>
                    <div className='profile__group'>
                        <input className='profile__input' placeholder='Имя'></input>
                        <p className='profile__description'>Виталий</p>
                    </div>
                    <div className='profile__group'>
                        <input className='profile__input' placeholder='E-mail'></input>
                        <p className='profile__description'>pochta@yandex.ru</p>
                    </div>
                </form>
                <div className='profile__buttons'>
                    <button className='profile__button'>Редактировать</button>
                    <button className='profile__button'>Выйти из аккаунта</button>
                </div>
            </section>
        </>
    );
}

export default Profile;