import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from './ThemeContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
