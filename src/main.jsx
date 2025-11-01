import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'
import JobsProvider from './context/JobsContext/JobsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <JobsProvider>
        <RouterProvider router={router} />,
      </JobsProvider>
    </AuthProvider>
  </StrictMode>,
)
