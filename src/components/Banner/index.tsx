// Style Sheet
import * as S from './styles'
// Component
import Tag from '../Tag'
// Image
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
const Banner = () => {
  return (
    // No React o CSS Inline é passado como um Objeto
    <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
          <S.Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </S.Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
