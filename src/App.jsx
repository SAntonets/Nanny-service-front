import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header/Header';
import { AuthProvider } from './firebse/auth/auth.jsx';
import Loader from './components/Loader/Loader.jsx';


const Nannies = lazy(() => import('./pages/Nannies.jsx'));
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'));


const App = () => {
  return (
    <div>
        <AuthProvider />
          <Header />
          <Suspense fallback={<Loader />}>
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
