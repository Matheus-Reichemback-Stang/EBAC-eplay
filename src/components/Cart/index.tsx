// Style Sheet
import * as S from './styles'

// Component
import Button from '../Button'

import image from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <img src={image} alt="Imagem do jogo" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>Windows</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={image} alt="Imagem do jogo" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>Windows</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Quantity>2 jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de R$ 250,00 <span> Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
