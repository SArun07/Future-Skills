import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards'; 
import SomeComponent from './components/SomeComponent';
import FetchData from './components/PostButton';
import Main from './components/main';
import CardDetail from './components/CardDetail';

function App() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main /> } />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cards/:title" element={<CardDetail />} />
        </Routes>
      </Router>
    );
}

export default App;
