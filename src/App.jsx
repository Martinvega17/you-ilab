import { useState } from 'react'
import Nav from './components/nav'
import Container_image from './components/container_image'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="App">
    <Nav />
    <Container_image />
  </div>
);
}

export default App;

