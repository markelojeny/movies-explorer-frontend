import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth';
import Auth from '../Auth';

//export default 
function Register() {
    const navigate = useNavigate();
    function handleClickLogin() {
        navigate('/signin');
    }

    return (
        <>
            <Auth 
            title="Добро пожаловать!" 
            button="Зарегистрироваться" 
            question="Уже зарегистрированы?"
            onClick={handleClickLogin}
            text="Войти">
                <FormAuth type="text" placeholder="" description="Имя" />
                <FormAuth type="text" placeholder="" description="E-mail" />
                <FormAuth type="password" placeholder="" description="Пароль" />
            </Auth>
        </>
    );
}

export default Register;