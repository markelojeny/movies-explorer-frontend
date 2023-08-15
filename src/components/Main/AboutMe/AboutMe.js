import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

//export default 
function AboutMe() {
    return (
        <section className="about">
            <h2 className="content__title">Студент</h2>
            <div className="about__groups">
                <div className="about__card">
                    <div className="about__group">
                        <h3 className="about__name">Евгения</h3>
                        <p className="about__subtitle">Фронтенд-разработчик, 22 года</p>
                        <p className="about__description">Я москвичка, учусь в университете ...</p>
                    </div>
                    <p className="about__link">Github</p>
                </div>
                <img className="about__photo" src='https://sun1-90.userapi.com/impg/YMUNk8f0JtpCC0YDItqfshu46uy7tY-4mZFpzg/mOQYPtYnZtc.jpg?size=810x1080&quality=95&sign=90d1ec17762c44ddbbd352a125782b4c&type=album' alt="Лого" />
            </div>
            <Portfolio />        
        </section>
    );
  }
    
export default AboutMe;