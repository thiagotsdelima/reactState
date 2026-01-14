import { useContext } from 'react'
import Estatistica from './estatistica'
import CursoContext from '@/context/CursoContext'

export default function Estatisticas() {
  const {
    qtdeDeAulas,
    aulasConcluidas,
    duracaoConcluida,
    percentualConclusao,
    duracaoTotal
  } = useContext(CursoContext)
  return (
    <div className="flex justify-around items-center w-4/5 h-24 bg-white/50 rounded-lg">
      <Estatistica valor={qtdeDeAulas} titulo="Qtde de aula" />
      <Estatistica valor={aulasConcluidas} titulo="Aulas concluidas" />
      <Estatistica valor={duracaoTotal} titulo="Duracao total" />
      <Estatistica valor={duracaoConcluida} titulo="Duracao concluida" />
      <Estatistica valor={`${percentualConclusao}%`} titulo="Perc. Concluido" />
    </div>
  )
}
