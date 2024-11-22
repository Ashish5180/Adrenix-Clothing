import React from 'react'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import { Outlet } from 'react-router-dom';
import Banner from './layouts/Banner';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Outlet/>
      <Footer/>
    </>
  )
}


export default App