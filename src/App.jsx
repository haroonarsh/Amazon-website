import { useState } from 'react';
import { DealsSection, Footer, GiftSection, Header, Header2, HeroSection, ServiceSection, Sidebar, } from './components/Index'
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  // const [sidebarToggle, setSidebarToggle] = useState(false);
  // const [sideToggle, setSideToggle] = useState(false);

  // const toggleSidebar = () => [
  //   setSidebarToggle(!sidebarToggle)
  // ]
  // const toggleSide = () => {
  //   setSideToggle(!sideToggle)
  // }

  return (
    <>
    {/* <Header />
    <Header2 toggleSidebar={toggleSidebar} toggleSide={toggleSide}/>
    <Sidebar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar} sideToggle={sideToggle} />
    
    <Footer /> */}
    </>
  )
}

export default App
