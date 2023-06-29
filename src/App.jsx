import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from './components/nav'; // Import navigation component
import Div_section from './components/div.section'; // Import div section component
import Footer from './components/footer'; // Import footer component

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import React Router routes and links

import Home from './components/pages/home'; // Import home page component
import About from './components/pages/about'; // Import about page component
import Projects from './components/pages/projects'; // Import projects page component
import Publications from './components/pages/publications'; // Import publications page component
import Contact from './components/pages/contact'; // Import contact page component


import './index.css'; // Import main CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab | Youth Innovation Laboratory</title> {/* Page title */}
        </Helmet>
        <Nav /> {/* Render navigation component */}
        <Routes>
          <Route path="you-ilab/home" element={<Home />} /> {/* Route and render home page component */}
          <Route path="you-ilab/about" element={<About />} /> {/* Route and render about page component */}
          <Route path="you-ilab/projects" element={<Projects />} /> {/* Route and render projects page component */}
          <Route path="you-ilab/publications" element={<Publications />} /> {/* Route and render publications page component */}
          <Route path="you-ilab/contact" element={<Contact />} /> {/* Route and render contact page component */}
        </Routes>
        <Footer /> {/* Render footer component */}
        <Div_section /> {/* Render div section component */}
      </div>
    </Router>
  );
}

export default App;
