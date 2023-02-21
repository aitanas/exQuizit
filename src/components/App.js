import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import List from './flashcard/List';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlashCard from './flashcard/Card';

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/'>
          <Route index element={<Home/>}></Route>
        </Route>

        <Route path='/List'>
          <Route index element={<List/>}></Route>
          <Route path=':flashcardId' element={<FlashCard/>} />
        </Route>

      </Routes>
      <Footer/>
    </Router>
  );
}

