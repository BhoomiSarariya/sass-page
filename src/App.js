import React from 'react';
import './app.scss';
import Home from './Home';
import Services from './Services';
import Header from './Header';
import About from './About';
import './App.css';
import Contact from './Contact';

function App() {
  return (
    <div className="container">
      <div>
        <Header />
        <Home />
        <Services />
        <About />
        <Contact />
      </div>
      <div className="footer">
        <p>&copy; copyright 2020</p>
      </div>
    </div>
  )
}

export default App;
