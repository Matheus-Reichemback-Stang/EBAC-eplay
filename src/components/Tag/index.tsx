import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

// Definindo o small como valor padrão
const Tag = ({ size = 'small', children }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
