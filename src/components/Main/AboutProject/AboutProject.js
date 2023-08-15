import React from 'react';
import './AboutProject.css';

//export default 
function AboutProject() {
    return (
        <section className="project">
          <h2 className="content__title">О проекте</h2>
          <div className="project__descriptions">
            <div className="project__description">
              <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
              <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="project__description">
              <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
              <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="project__grid">
            <p className="project__back">1 неделя</p>
            <p className="project__front">4 недели</p>
            <p className="project__announcement">Back-end</p>
            <p className="project__announcement">Front-end</p>
          </div>
        </section>
    );
}

export default AboutProject;