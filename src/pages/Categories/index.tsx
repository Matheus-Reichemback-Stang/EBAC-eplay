// Component
import ProductsList from '../../components/ProductsList'

// Class
import Game from '../../models/Game'

// Images
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    image: resident,
    infos: ['R$ 250,00', '-10%'],
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 2,
    image: zelda,
    infos: ['R$ 1000,00', '-80%'],
    title: 'Zelda',
    category: 'RPG',
    system: 'Nintendo Switch',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 3,
    image: resident,
    infos: ['R$ 250,00', '-10%'],
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 4,
    image: zelda,
    infos: ['R$ 1000,00', '-80%'],
    title: 'Zelda',
    category: 'RPG',
    system: 'Nintendo Switch',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    image: diablo,
    infos: ['12/09'],
    title: 'Diablo',
    category: 'Ação/RPG',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 6,
    image: starWars,
    infos: ['17/05'],
    title: 'Star Wars',
    category: 'Sci-Fi',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 7,
    image: diablo,
    infos: ['12/09'],
    title: 'Diablo',
    category: 'Ação/RPG',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  },
  {
    id: 8,
    image: starWars,
    infos: ['17/05'],
    title: 'Star Wars',
    category: 'Sci-Fi',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius natus at provident inventore quibusdam'
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="grey" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="grey" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories
