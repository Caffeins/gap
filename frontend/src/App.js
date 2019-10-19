import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Board from './components/pages/Board/ClanIndex.js';
import UserList from './components/pages/Board/UserIndex.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Board />
      <UserList />
    </div>
  );
}

export default App;
