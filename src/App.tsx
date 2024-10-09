import { Provider } from 'react-redux'
// Quando o RouterProvider Não conter toda a aplicação, é preciso usar o BrowserRouter como container
// da aplicação para colocar o contexto em toda o código,
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

// Rotas do site
import Rotas from './routes'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
