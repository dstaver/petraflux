import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { HelloReactVirtual } from '.'

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <HelloReactVirtual />
    </StrictMode>,
  )
}
