import { useState } from 'react';
import Nav from './components/nav';
import Container_image from './components/container_image';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import About from './components/pages/about';
import Projects from './components/pages/projects';
import Publications from './components/pages/publications';
import Contact from './components/pages/contact';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="you-ilab/about" element={<About />} />
        <Route path="you-ilab/projects" element={<Projects />} />
        <Route path="you-ilab/publications" element={<Publications />} />
        <Route path="you-ilab/contact" element={<Contact />} />
        </Routes>
        <Container_image />
      </div>
    </Router>
  );
}

export default App;
