import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConfigAntdTheme from './lib/antd/config-theme.jsx'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './lib/react-query/query-provider.jsx'
import { CartProvider } from './context/cart-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigAntdTheme>
      <QueryProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </QueryProvider>
    </ConfigAntdTheme>
  </React.StrictMode>,
)
