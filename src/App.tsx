// Quando o RouterProvider Não conter toda a aplicação, é preciso usar o BrowserRouter como container
// da aplicação para colocar o contexto em toda o código,
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

// Rotas do site
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
