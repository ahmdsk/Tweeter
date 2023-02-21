import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import './index.css'
import Explore from './pages/Explore'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/explore',
    element: <Explore />
  },
  {
    path: '/bookmarks',
    element: <Bookmarks />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
