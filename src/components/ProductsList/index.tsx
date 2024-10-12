// Component
import Product from '../Product'
import { Game } from '../../pages/Home'

// Function
import { priceFormat } from '../../utils/'

// Style Sheet
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ title, background, games, id }: Props) => {
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
    <S.Container id={id} background={background}>
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
