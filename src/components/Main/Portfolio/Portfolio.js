import React from 'react';
import './Portfolio.css';

//export default 
function Portfolio() {

    const links = [
        { title: 'Статичный сайт', url: 'https://github.com/markelojeny' },
        { title: 'Адаптивный сайт', url: 'https://github.com/markelojeny' },
        { title: 'Одностраничное приложение', url: 'https://github.com/markelojeny' },
    ];

    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            {links.map((link, i) => (
                <React.Fragment key={i}>
                    <a 
                    className="portfolio__group"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer">
                        <p className="portfolio__link">
                            {link.title}
                        </p>
                        <p className="portfolio__picture"></p>
                    </a>
                </React.Fragment>
            ))}
        </section>
    );
}
    
export default Portfolio;