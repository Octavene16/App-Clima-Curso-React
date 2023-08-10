import React from 'react'
import ReactDOM from 'react-dom/client'
import {WheatherApp} from './component/WheatherApp'
import './styles/WheatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp></WheatherApp>
  </React.StrictMode>,
)
