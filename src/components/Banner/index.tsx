// External Dependecies
import { useEffect, useState } from 'react'

// Internal Dependecies
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductsList'

// Components
import Tag from '../Tag'
import Button from '../Button'

// Style Sheet
import * as S from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return (
      <>
        <h3>Carregando...</h3>
      </>
    )
  }

  return (
    // No React o CSS Inline é passado como um Objeto
    <S.Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
