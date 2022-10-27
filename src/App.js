import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import DataContext from './Components/MainContext';
import Article from './Components/Article';

const App = () => {  
  return (
    <DataContext>
      <div className="App">
        {/* document.getElementByTagName('title') = "The Siren"; */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/category/:categories' element={<Category />} />
            <Route path='/category/article/:ID/:categories' element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataContext>
  );
}

export default App;
