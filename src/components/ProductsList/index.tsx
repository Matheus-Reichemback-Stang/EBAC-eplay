// Style Sheet
import * as S from './styles'

// Component
import Product from '../Product'

// Class
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games.map((game) => (
            <Product
              key={game.id}
              image={game.image}
              infos={game.infos}
              title={game.title}
              category={game.category}
              system={game.system}
              description={game.description}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
