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
                    <div className="portfolio__group">
                        <a
                            className="portfolio__link"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.title}
                        </a>
                        <a
                            className="portfolio__picture"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                        </a>
                    </div>
                </React.Fragment>
            ))}
        </section>
    );
}
    
export default Portfolio;