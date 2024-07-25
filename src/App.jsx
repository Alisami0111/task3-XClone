import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Trends from './components/Trends';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Trends />
    </div>
  );
};

export default App;
