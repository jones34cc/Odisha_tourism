import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Destination from './components/Destination'
import Guides from './components/Guides'
import Accomodation from './components/Accomodation'
import ContactUs from './components/ContactUs'
import ScrollToTop from './components/ScrolltoTop'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destination/>}/>
        <Route path='/guides' element={<Guides/>}/>
        <Route path='/accomodation' element={<Accomodation/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <ScrollToTop/>
    </>
  )
}

export default App
