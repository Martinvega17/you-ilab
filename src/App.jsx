/* The code you provided is a React component called `App`. It is the main component of your
application and serves as the entry point for rendering your application. */
import React from 'react';
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
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>You-i Lab | Youth Innovation Laboratory</title>
        </Helmet>
        <Nav />
        <Menu />
        
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
      </div>
    </Router>
  );
}

export default App;
