import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

// Componente De Rotas
const Rotas = () => (
  // Lista das Rotas
  <Routes>
    {/* Rota */}
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    {/* Definindo o ID como parâmetro da URL */}
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
