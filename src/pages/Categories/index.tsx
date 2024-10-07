// External Dependencies
import { useEffect, useState } from 'react'

// Internal Dependency
import { Game } from '../Home'

// Component
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])

  useEffect(() => {
    // RPG
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
    // Ação
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    // Esportes
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
    // Simulação
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
    // Luta
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesRpg} title="RPG" background="black" />
      <ProductsList games={gamesAcao} title="Ação" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
      />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
    </>
  )
}

export default Categories
