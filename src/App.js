import React from 'react';
import './App.css';
import {About, Blog, Contact, Home, Navbar, Products} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;