import './assets/bootstrap-5.3.3/css/bootstrap.min.css'
import './assets/bootstrap-icons/font/bootstrap-icons.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
