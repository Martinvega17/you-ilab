import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';

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
        <nav className={`relative bg-azul-claro ${isMenuOpen ? 'bg-azul-claro' : ''}`}>
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
                        <div className="fixed top-0 right-0">
                            <button
                                className="md:hidden text-black-800 font-black text-4xl mr-2 mt-2"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-center flex-grow">
                            <ul className="flex justify-center text-right">
                                <li className="nav-item mr-8">
                                    <NavLink
                                        to="/you-ilab/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-red-500 font-bold text-lg underline'
                                                : 'text-blue-800 font-bold text-lg'
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
                                            isActive
                                                ? 'text-red-500 font-bold text-lg underline'
                                                : 'text-blue-800 font-bold text-lg'
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
                                            isActive
                                                ? 'text-red-500 font-bold text-lg underline'
                                                : 'text-blue-800 font-bold text-lg'
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
                                            isActive
                                                ? 'text-red-500 font-bold text-lg underline'
                                                : 'text-blue-800 font-bold text-lg'
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
                <NavContainer>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
                            <Link className="mb-16" onClick={toggleMenu} to="/you-ilab/">
                                Inicio
                            </Link>
                            <Link className="mb-16" onClick={toggleMenu} to="/you-ilab/about">
                                Nosotros
                            </Link>
                            <Link className="mb-16" onClick={toggleMenu} to="/you-ilab/projects">
                                Proyectos
                            </Link>
                            <Link className="mb-16" onClick={toggleMenu} to="/you-ilab/contact">
                                Contacto
                            </Link>
                        </div>
                        <div className="burguer">
                            <BurguerButton clicked={isMenuOpen} handleClick={toggleMenu} />
                        </div>
                        <BgDiv className={`initial ${isMenuOpen ? 'active' : ''}`}></BgDiv>
                    </div>
                </NavContainer>
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

const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 1;
    transition: opacity 0.3s ease;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .your-page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    z-index: 0; /* Asegúrate de que el z-index sea menor que el de NavContainer */
  }

  .content-container {
    flex-grow: 1;
    z-index: 1; /* Asegúrate de que el z-index sea mayor que el de NavContainer */
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1; /* Asegúrate de que el z-index sea menor que el de NavContainer */

  &.active {
    border-radius: 0 0 0 50%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-clip-path: circle(150% at 100% -10%);
    clip-path: circle(150% at 100% -10%);
    transition: all 0.3s ease-out;
  }
`;
