import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'

// Componente De Rotas
const Rotas = () => (
  // Lista das Rotas
  <Routes>
    {/* Rota */}
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
