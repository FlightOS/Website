import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Credits from './pages/Credits';
import Downloads from './pages/Downloads';
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Credits" element={<Credits />} />
      <Route path="/Downloads" element={<Downloads />} />
    </Routes>
  </BrowserRouter>
)