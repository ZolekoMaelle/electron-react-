import { Route, Routes } from 'react-router-dom'
import React from 'react'
import "@/App.css"; 
import Landing from './Pages/Landing'

import Anniversaire from './Events/Anniversaire'
import Reunion from './Events/Reunion'
import Signup from './Pages/Signup'
import Bapteme from './Events/Bapteme'
import Mariage from './Events/Mariage'
import Diplomation from './Events/Diplomation'
import Seminaire from './Events/Seminaire'
import Prestataire from './Pages/Prestataire'
import Projet from './Pages/Projet'
import Login from './Pages/Login'

import Entreprise from './Pages/Entreprise'

function App() {
 
  return (
    <>
{/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/prestataire" element={<Prestataire />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/mariage" element={<Mariage />} />
        <Route path="/anniversaire" element={<Anniversaire/>} />
        <Route path="/Bapteme" element={<Bapteme />} />
        <Route path="/reunion" element={<Reunion/>} />
        <Route path="/seminaire" element={<Seminaire />} />
        <Route path="/diplomation" element={<Diplomation />} />
        
      </Routes>

    </>
  )
}

export default App;
