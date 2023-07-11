import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Importar los iconos necesarios
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';

const Nav = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkWindowSize();

        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <nav className={`relative bg-azul-claro ${isMenuOpen ? 'bg-white' : ''}`}>
            <div className="mx-auto px-8 py-3 md:py-1">
                <div className="flex items-center justify-center">
                    <div className="mr-auto">
                        <Link to="/you-ilab/" className="contents">
                            <img
                                className={`text-white text-lg font-semibold h-20 ${!isMenuOpen ? 'md:ml-0' : ''}`}
                                src={logo_you_i_lab}
                                alt="Logo"
                                style={{ maxWidth: '120px' }}
                            />
                        </Link>
                    </div>
                    {isMobile ? (
                        <div>
                            {/* Botón */}
                            <button className="md:hidden ml-2 text-blue-800 font-bold text-2xl" onClick={toggleMenu}>
                                {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-center flex-grow">
                            <ul className="flex justify-center text-right"> {/* Agregado: space-x-8 */}
                                <li className="nav-item mr-8">
                                    <NavLink
                                        to="/you-ilab/"
                                        className={({ isActive }) =>
                                            isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                        }
                                        activeClassName="active"
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item mr-8">
                                    <NavLink
                                        to="/you-ilab/about"
                                        className={({ isActive }) =>
                                            isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                        }
                                        activeClassName="active"
                                    >
                                        Nosotros
                                    </NavLink>
                                </li>
                                <li className="nav-item mr-8">
                                    <NavLink
                                        to="/you-ilab/projects"
                                        className={({ isActive }) =>
                                            isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                        }
                                        activeClassName="active"
                                    >
                                        Proyectos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/you-ilab/contact"
                                        className={({ isActive }) =>
                                            isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                        }
                                        activeClassName="active"
                                    >
                                        Contacto
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {isMenuOpen && isMobile && (
                <div className="bg-white py-4 md:py-0 absolute top-16 left-0 right-0 md:relative md:flex md:items-center md:justify-center md:space-x-8">
                    <ul className="md:flex justify-center text-center">
                        <li className="nav-item mr-8">
                            <NavLink
                                to="/you-ilab/"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                }
                                activeClassName="active"
                                onClick={toggleMenu}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item mr-8">
                            <NavLink
                                to="/you-ilab/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                }
                                activeClassName="active"
                                onClick={toggleMenu}
                            >
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item mr-8">
                            <NavLink
                                to="/you-ilab/projects"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                }
                                activeClassName="active"
                                onClick={toggleMenu}
                            >
                                Proyectos
                            </NavLink>
                        </li>
                        <li className="nav-item mr-5">
                            <NavLink
                                to="/you-ilab/contact"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                                }
                                activeClassName="active"
                                onClick={toggleMenu}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
            <div className="container mx-auto px-4 py-0 md:py-0">
                <div className="absolute top-0 right-0 flex items-end justify-end mt-0 mr-0">
                    <div className="contents">
                        <img src={logo_cns} alt="logo cns" className="h-20 ml-2 md:block hidden" id="cns" />
                        <img
                            src={logo_ipicyt}
                            alt="logo ipicyt"
                            className="h-20 absolute left-0"
                            id="logo-ipicyt"
                            style={{ marginLeft: '-110px' }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
