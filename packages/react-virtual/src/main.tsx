import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { HelloReactVirtual } from '.'
import './styles.css'

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
