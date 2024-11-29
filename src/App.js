// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Tarife from './pages/Tarife';
import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const Sidebar = () => {
    const handleClick = (e) => {
      setCurrentPage(e.target.id);
    }
  
    return (
        <div className="sidebar">
            <button className="button background" id="home" onClick={handleClick}>Home</button>
            <button className="button background" id="tarife" onClick={handleClick}>Tarife</button>
        </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Main</h3>
        
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div class="content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'tarife' && <Tarife />}
        </div>

      </header>
    </div>
  );
}

export default App;
