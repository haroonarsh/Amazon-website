import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from './Layouts.jsx'
import { DealsSection, GiftSection, HeroSection, ServiceSection } from './components/Index.js'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '',
        element: <HeroSection />
      },
      {
        path: '/deals',
        element: <DealsSection />
      },
      {
        path: '/services',
        element: <ServiceSection />
      },
      {
        path: '/gifts',
        element: <GiftSection />
      },
      {
        path: '/home',
        element: <HeroSection />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-s5ykbraz1y30sicd.au.auth0.com"
    clientId="hM5V29WCz6QEyjLtM7gaaTr1t9jnARHC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>,
    

)
