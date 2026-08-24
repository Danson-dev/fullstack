 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import Products from './pages/Products';
 
 const App = () => {
   return (
     <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/> 
      </Routes>
      </BrowserRouter>

     </div>
   )
 }
 
 export default App