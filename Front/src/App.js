// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Angajati from './pages/Angajati';
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
            <button className="button background" id="angajati" onClick={handleClick}>Angajati</button>
            <button className="button background" id="tasks" onClick={handleClick}>Taskuri</button>
            <button className="button background" id="calendar" onClick={handleClick}>Calendar</button>
            <button className="button background bottom" id="profile" onClick={handleClick}>Profil</button>
        </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div class="content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'angajati' && <Angajati />}
        </div>

      </header>
    </div>
  );
}

export default App;
