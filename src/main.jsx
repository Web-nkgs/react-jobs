import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode.- Wrapper component that'll check for problems in your app (deprecated, unsafe cycle methods, legacy content, etc).  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
