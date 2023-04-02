import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SidebarMenu } from './components/sidebar/Sidebar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarMenu />
    <App />
  </React.StrictMode>,
)
