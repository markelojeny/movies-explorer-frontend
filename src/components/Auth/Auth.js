import React from 'react';
import './Auth.css';
import Header from '../BasedComponent/Header/Header';

//export default 
function Auth(props) {
    return (
        <>
            <Header />
            <section className='auth'>
                <h2 className='auth__title'>{props.title}</h2>
                <form className='auth__form'>
                    {props.children}
                </form>
                <div className='auth__buttons'>
                    <button className='auth__button'>{props.button}</button>
                    <div className='auth__group'>
                        <p className='auth__question'>{props.question}</p>
                        <p className='auth__text' onClick={props.onClick}>{props.text}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Auth;