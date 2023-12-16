import React from 'react'
import {Routes,route,Navigate, Route} from 'react-router-dom'
import Home from'../../pages/Home';
import Tours from'../../pages/Tours';
import TourDetail from'../../pages/TourDetail';
import Login from'../../pages/Login';
import Register from'../../pages/Register';
import SearchResultList from'../../pages/SearchResultList';
import SearchBar from '../../shared/SearchBar';
import ThankYou from '../../pages/ThankYou';
import Phonepe from '../../pages/Phonepe';
function Routers() {
  return (<>
   <Routes> 
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/tours/:id" element={<TourDetail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/thank-you" element={<ThankYou/>} />
      <Route path="/tours/search" element={<SearchResultList/>} />
      <Route path="/home" element={<SearchBar/>} />
      <Route path="/Payment" element={<Phonepe/>} />
   </Routes>
   </>
  )
}

export default Routers