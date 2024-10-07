// useParams - Permite resgatar os parametros definidos na rota
import { useParams } from 'react-router-dom'

// Components
import Hero from '../../components/Hero'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
