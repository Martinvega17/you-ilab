import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Publications from './components/pages/Publications';
import Contact from './components/pages/Contact';
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
        <Home />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
