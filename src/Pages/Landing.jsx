
import React from 'react'
import "@/App.css";   
import Navbar from '@components/Navbar';
import Text from '@components/Text.jsx'
import Footer from '@components/Footer.jsx'
import Events from '@components/Events.jsx'

function Landing() {
 

  return (
    <>
    <Navbar />
    <Text/>
    <Events/>
    <Footer/>
    </>
  )
}

export default Landing;
