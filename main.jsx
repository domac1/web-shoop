import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'
import App from './App.jsx'
import { CartProvider } from "./contexts/CartContext"

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
)
