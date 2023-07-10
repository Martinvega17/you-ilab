import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Nav from './components/Nav';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Publications from './components/pages/publications';
import Contact from './components/pages/contact';
import Menu from './components/menu';

import './index.css';
import './menu.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab | Youth Innovation Laboratory</title>
        </Helmet>
        
        {loading ? (
          <div id="preloader" className="flex items-center justify-center h-screen">
            <div className="ctn-preloader">
              <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading text-gray-600 text-center" >
                  <span>YOUTH</span><br />
                  <span>INNOVATION</span><br />
                  <span>LABORATORY</span>
                </div>
              </div>
              <div className="loader">
                <div className="row">
                  <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                  </div>
                  <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                  </div>
                  <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                  </div>
                  <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
         <Menu />
            <Nav />
            <div className="content">
              <Routes>
                <Route path="/you-ilab/" element={<Home />} />
                <Route path="/you-ilab/about" element={<About />} />
                <Route path="/you-ilab/projects" element={<Projects />} />
                <Route path="/you-ilab/publications" element={<Publications />} />
                <Route path="/you-ilab/contact" element={<Contact />} />
              </Routes>
            </div>
            
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
