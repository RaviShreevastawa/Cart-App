import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"


function Layout() {
  return (
    <>
      <Header/> 
      <Home/>
      <Footer/>
    </>
  )
}

export default Layout