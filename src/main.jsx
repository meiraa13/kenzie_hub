import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalReset } from './global'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './providers/Providers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalReset />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
