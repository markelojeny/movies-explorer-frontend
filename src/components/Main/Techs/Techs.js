import React from 'react';
import './Techs.css';

//export default 
function Techs() {
    return (
        <section className="techs">
          <h2 className="content__title content__title_margin">Технологии</h2>
          <div className="techs__description">
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
          <div className="techs__list">
            <p className="techs__paragraph">HTML</p>
            <p className="techs__paragraph">CSS</p>
            <p className="techs__paragraph">JS</p>
            <p className="techs__paragraph">React</p>
            <p className="techs__paragraph">Git</p>
            <p className="techs__paragraph">Express.js</p>
            <p className="techs__paragraph">mongoDB</p>
          </div>
        </section>
    );
}

export default Techs;