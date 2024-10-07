// Style Sheet
import * as S from './styles'

// Component
import Product from '../Product'
import { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

// Por estar definindo o paremetro como 0, ele fica com esse valor padrão
// caso a função tenha um parametro undefined
export const priceFormat = (price = 0) => {
  // Intl - Serve para Internacionalização de dados
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const ProductsList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(priceFormat(game.prices.current))
    }

    return tags
  }

  return (
    <S.Container background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
