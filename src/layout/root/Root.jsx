import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar__part/Navbar'
import Footers from '../../components/Footer_part/Footers'


const Root = () => {
  return (
    <>
    <Navbar/>
     <Outlet/>  
     <Footers/>
    </>
  )
}

export default Root

