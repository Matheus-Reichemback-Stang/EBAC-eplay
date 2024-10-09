// External Dependecies
import { useDispatch } from 'react-redux'

// Actions
import { add, open } from '../../store/reducers/cart'

// Style Sheet
import * as S from './styles'

// Internal Dependecies
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <>
                De <span>{priceFormat(game.prices.old)}</span> <br />
              </>
            )}
            {game.prices.current && (
              <>Para {priceFormat(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
