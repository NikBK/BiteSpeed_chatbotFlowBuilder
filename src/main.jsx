import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FlowContextProvider } from './store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlowContextProvider>
      <App />
    </FlowContextProvider>
  </React.StrictMode>,
)
