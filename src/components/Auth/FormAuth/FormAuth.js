import React from 'react';
import './FormAuth.css';

//export default 
function FormAuth(props) {
    return (
        <>
            <div className='auth__container'>
                <p className='auth__description'>{props.description}</p>
                <input className='auth__input' required type={props.type} placeholder={props.placeholder}></input>
            </div>
               
        </>
    );
}

export default FormAuth;