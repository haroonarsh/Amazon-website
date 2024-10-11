import React from 'react'
import { useState } from 'react';
import { DealsSection, Footer, GiftSection, Header, Header2, HeroSection, ServiceSection, Sidebar, } from './components/Index'
import { Outlet } from 'react-router-dom';

function Layouts() {

    const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);

  const toggleSidebar = () => [
    setSidebarToggle(!sidebarToggle)
  ]
  const toggleSide = () => {
    setSideToggle(!sideToggle)
  }

  return (
    <>
    <Header />
    <Header2 toggleSidebar={toggleSidebar} toggleSide={toggleSide}/>
    <Sidebar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar} sideToggle={sideToggle} />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layouts