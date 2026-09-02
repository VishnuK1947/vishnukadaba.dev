import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const pathname = window.location.pathname
const app = (
  <StrictMode>
    <App pathname={pathname} />
  </StrictMode>
)

// Dev has an empty root; production hydrates the matching build-time HTML.
// The route check also handles SPA fallbacks in Vite's local preview server.
const page = pathname === '/' ? 'home' : 'not-found'
if (root.hasChildNodes() && root.dataset.page === page) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
