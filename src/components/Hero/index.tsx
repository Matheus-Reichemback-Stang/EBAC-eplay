// Style Sheet
import * as S from './styles'

// Image
import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>Windows</Tag>
        </div>
        <S.Infos>
          <h2>Hogwards Legacy</h2>
          <p>
            De <span>R$ 250,00</span> <br />
            Para R$ 190,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
