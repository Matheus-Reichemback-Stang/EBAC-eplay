// Components
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

// Functions
import { priceFormat } from '../../utils/'
import { useGetFeaturedGameQuery } from '../../services/api'

// Style Sheet
import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    // No React o CSS Inline é passado como um Objeto
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
