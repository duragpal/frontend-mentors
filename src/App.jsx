import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import QrCode from './components/QrCode';

import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}



function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;