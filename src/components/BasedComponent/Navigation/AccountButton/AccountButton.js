import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountButton.css';

//export default 
function AccountButton(props) {
    const navigate = useNavigate();

    function handleClickAccount() {
        navigate('/profile');
    }

    return (
        <div className={props.className} onClick={handleClickAccount}>
            <button className="header__image"></button>
            <p className="header__account">Аккаунт</p>
        </div>
    );
  }
    
export default AccountButton;