import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { UserProfile } from './pages/user-profile/index.tsx'
import "./global.css"
import App from './app.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <UserProfile />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
