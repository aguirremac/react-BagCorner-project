import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import BestCards from './components/BestCards'
import Bag from './components/Bag'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BestCards />
      <Bag />
    </div>
  );
}

export default App;
