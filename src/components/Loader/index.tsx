// External Dependencies
import { PacmanLoader } from 'react-spinners'

// Colors
import { colors } from '../../styles'

// Style Sheet
import * as S from './styles'

const Loader = () => {
  return (
    <S.Container>
      <PacmanLoader color={colors.white} />
    </S.Container>
  )
}

export default Loader
