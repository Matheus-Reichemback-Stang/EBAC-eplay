import * as S from './styles'

import Product from '../Product'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="Mario"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="Mario"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="Mario"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="Mario"
          />
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
