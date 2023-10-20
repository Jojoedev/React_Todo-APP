
//import { useContext, useState } from 'react';
import './App.css';
//import NewTask from './NewTask';
import Product from './components/Product';
import Header from './components/Header'
import Nav from './components/Nav';
import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import { FaHeadSideCough } from 'react-icons/fa';


function App() {

  return (
    <div className="App">
     <Nav />
     
     
     <Routes>
      <Route path="/Todo" element={<Product />} />
      <Route path="/Picture" element={<About />} />
     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
