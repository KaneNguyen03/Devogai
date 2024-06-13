import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConfigAntdTheme from './lib/antd/config-theme.jsx'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './lib/react-query/query-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigAntdTheme>
      <QueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryProvider>
    </ConfigAntdTheme>
  </React.StrictMode>,
)
