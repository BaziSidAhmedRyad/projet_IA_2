import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Landingpage from './landingpage.jsx'
import BasicExample from './navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicExample/>

    <Landingpage/>
    <App />
  </React.StrictMode>,
)
