import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import './index.css'
import Explore from './pages/Explore'
import Bookmarks from './pages/Bookmarks'
import DetailProfile from './pages/DetailProfile'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

import { AppContext } from './context/app-context'

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
    path: '/user',
    element: <DetailProfile />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/profile/edit',
    element: <EditProfile />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const appProviderValue = {
  tes: 'tes'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={appProviderValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>,
)
