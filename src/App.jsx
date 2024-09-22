import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header/Header';
import { AuthProvider } from './firebse/auth/auth.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


const Nannies = lazy(() => import('./pages/Nannies.jsx'));
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'));


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider />
          <Header />
          <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nannies' element={<Nannies />} />
           <Route path='/favorites' element={<Favorites />} />
           <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>

      </Provider>
    </div>
  );
}

export default App;
