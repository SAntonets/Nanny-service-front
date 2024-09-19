import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';

import Header from './components/Header/Header';


const Nannies = lazy(() => import('./pages/Nannies.jsx'));
const Favorites = lazy(() => import('./pages/Favorites.jsx'))

const App = () => {
  return (
    <div>
      <Header />
        <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nannies' element={<Nannies />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
</Suspense>
    </div>
  );
}

export default App;
