import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./global.css"
import App from './app.tsx'

import { User } from './pages/user/index.tsx'
import { Adm } from './pages/adm/index.tsx'
import { UserSignUp } from './pages/user-signup/index.tsx' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/usuário',
    element: <User />,
  },
  {
    path: '/adm',
    element: <Adm />,
  },
  {
    path: '/cadastrar',
    element: <UserSignUp />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
