import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div id="menuContainer" className="hidden md:block">
                <hr className="border-gray-700 my-2" />
            </div>

            <div className="menu-container">
                <label htmlFor="menu-toggle" className="menu-button"></label>
                <ul className="menu">
                    <li>
                        <Link to="#Inicio">Inicio</Link>
                        <div className="menu-text no-reverse">Inicio</div>
                    </li>
                    <li>
                        <Link to="#About">Nosotros</Link>
                        <span className="menu-text">Nosotros</span>
                    </li>
                    <li>
                        <Link to="#Projects">Proyectos</Link>
                        <span className="menu-text">Proyectos</span>
                    </li>
                    <li>
                        <Link to="#Contact">Contacto</Link>
                        <span className="menu-text">Contacto</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;