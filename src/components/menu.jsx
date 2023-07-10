import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div classNameName="menu-container">
                <label htmlFor="menu-toggle" classNameName="menu-button"></label>
                <ul classNameName="menu">
                    <li>
                        <Link to="/you-ilab/">Inicio</Link>
                        <div classNameName="menu-text no-reverse">Inicio</div>
                    </li>
                    <li>
                        <Link to="/you-ilab/about">Nosotros</Link>
                        <span classNameName="menu-text">Nosotros</span>
                    </li>
                    <li>
                        <Link to="/you-ilab/projects">Proyectos</Link>
                        <span classNameName="menu-text">Proyectos</span>
                    </li>
                    <li>
                        <Link to="/you-ilab/contact">Contacto</Link>
                        <span classNameName="menu-text">Contacto</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
