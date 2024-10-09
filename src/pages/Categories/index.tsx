// External Dependencies
import { useEffect, useState } from 'react'

// Internal Dependency
import { Game } from '../Home'

// Component
import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()

  if (rpgGames && actionGames && sportGames && simulationGames && fightGames) {
    return (
      <>
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={fightGames} title="Luta" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
