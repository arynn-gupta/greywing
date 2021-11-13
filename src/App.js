import HomePage from './pages/homepage.component';
import About from './pages/about.component';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './component/header.component';
import Footer from './component/footer.component';
import './app.scss';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
