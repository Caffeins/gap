import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Board from './components/pages/Board';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Board />
    </div>
  );
}

export default App;
