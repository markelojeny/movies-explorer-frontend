import React from 'react';
import './Error404.css';

//export default 
function Error404() {
    return (
        <div className='error'>
            <div className='error__group'>
                <h1 className='error__title'>404</h1>
                <p className='error__subtitle'>Страница не найдена</p>
            </div>
            <button className='error__button'>Назад</button>
        </div>
    );
}

export default Error404;