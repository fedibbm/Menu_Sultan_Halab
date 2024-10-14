import React from 'react'
import HomePage from './pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import "./App.css";

const App = () => {
  return (
    <div className='(bg-[#dec58e]) md:w-[425px] md:h-[914px] md:absolute md:overflow-scroll md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 min-h-screen custom-bg' style={{backgroundImage:"url(images/bg_pattern.jpg)"}} >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:path" element={<MenuPage />}  />
      </Routes>
    </div>
  ) 
}

export default App