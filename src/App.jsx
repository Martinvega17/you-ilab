import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavContainer from './components/nav';
import Footer from './components/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

import './css/contact.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab | Youth Innovation Laboratory</title>
        </Helmet>
          
        <NavContainer />

        <div className="your-page-container">
          <div className="content">
            <Routes>
              <Route path="/you-ilab/" element={<Home />} />
              <Route path="/you-ilab/about" element={<About />} />
              <Route path="/you-ilab/projects" element={<Projects />} />
              <Route path="/you-ilab/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
