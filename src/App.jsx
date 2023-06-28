import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from './components/nav';
import Div_section from './components/div.section';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Publications from './components/pages/publications';
import Contact from './components/pages/contact';

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab - Youth Innovation Laboratory</title>
        </Helmet>
        <Nav />
        <Routes>
          <Route path="you-ilab/home" element={<Home />} />
          <Route path="you-ilab/about" element={<About />} />
          <Route path="you-ilab/projects" element={<Projects />} />
          <Route path="you-ilab/publications" element={<Publications />} />
          <Route path="you-ilab/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Div_section />
      </div>
    </Router>
  );
}

export default App;
