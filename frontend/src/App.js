import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Home />
    </div>
  );
}

export default App;
