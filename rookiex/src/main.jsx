import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FiltersProvider } from './context/filters.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </BrowserRouter>,
)
