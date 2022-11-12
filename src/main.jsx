import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/routes/Router';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css"
import "./styles/container.css"
import './fonts/IBMPlexSansCondensed-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
