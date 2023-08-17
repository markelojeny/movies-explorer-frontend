import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth';
import Auth from '../Auth';

//export default
function Login() {
    const navigate = useNavigate();
    function handleClickRegistration() {
        navigate('/signup');
    }

    return (
        <>
            <Auth 
            title="Рады видеть!" 
            button="Войти" 
            question="Ещё не зарегистрированы?"
            onClick={handleClickRegistration}
            text="Регистрация">
                <FormAuth type="text" placeholder="" description="E-mail" />
                <FormAuth type="password" placeholder="" description="Пароль" />
            </Auth>
        </>
    );
}

export default Login;