import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import Board from './components/pages/Board';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Home />
      <Board />
    </div>
  );
}

export default App;
