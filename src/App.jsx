import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

import './contact.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab | Youth Innovation Laboratory</title>
        </Helmet>
        <Nav />
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
    </Router>
  );
}

export default App;
