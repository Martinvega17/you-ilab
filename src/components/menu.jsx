import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className="menu-container">
                <label htmlFor="menu-toggle" className="menu-button"></label>
                <ul className="menu">
                    <li>
                        <Link to="/you-ilab/">Inicio</Link>
                        <div className="menu-text no-reverse">Inicio</div>
                    </li>
                    <li>
                        <Link to="/you-ilab/about">Nosotros</Link>
                        <span className="menu-text">Nosotros</span>
                    </li>
                    <li>
                        <Link to="/you-ilab/projects">Proyectos</Link>
                        <span className="menu-text">Proyectos</span>
                    </li>
                    <li>
                        <Link to="/you-ilab/contact">Contacto</Link>
                        <span className="menu-text">Contacto</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
