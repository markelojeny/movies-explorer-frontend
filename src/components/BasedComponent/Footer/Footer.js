import React from 'react';
import './Footer.css';

//export default 
function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__group">
                <p className="footer__copyright">© {new Date().getFullYear()}</p>
                <div className="footer__links">
                    <p className="footer__link">Яндекс.Практикум</p>
                    <p className="footer__link">Github</p>
                </div>
            </div>
        </footer>
    );
  }
    
export default Footer;