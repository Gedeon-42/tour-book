import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './layout.css'
import Modal from '../pages/Modal'
import { useStateContext } from '../../assets/Context/ContextProvide'

function Layout() {
 const{modal,openModal}=useStateContext()
  return (
    <>
    {modal?<Modal openModal={openModal} />:(
      <>
      <Navbar />
       <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
    )}
   </>
  )
}

export default Layout