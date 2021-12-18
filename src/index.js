//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import './Index.css';


//ReactDOM.render(<App />,
//    document.getElementById('root')
//);
import React from 'react'; 

import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from "./Home"
import About from "./About"
import Popular from "./Popular.js"

import reportWebVitals from './reportWebVitals';


ReactDOM.render(

  <BrowserRouter>

  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Popular" element={<Popular />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')

);

reportWebVitals();

