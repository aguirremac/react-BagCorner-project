import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BestCards from './components/BestCards';
import Bag from './components/Bag';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BestCards />
      <Bag />
      <Category />
    </div>
  );
}

export default App;
