import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './contexts/theme-context.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
