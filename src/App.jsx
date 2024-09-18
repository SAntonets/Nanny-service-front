import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nannies } from './pages/Nannies';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nannies' element={<Nannies />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
