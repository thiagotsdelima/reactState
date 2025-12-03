import Estatistica from './estatistica'

export default function Estatisticas() {
  return (
    <div className="flex justify-around items-center w-4/5 h-24 bg-white/50 rounded-lg">
      <Estatistica valor={10} titulo="Qtde de aula" />
      <Estatistica valor={5} titulo="Aulas concluidas" />
      <Estatistica valor="2h:30" titulo="Duracao total" />
      <Estatistica valor="1h:24" titulo="Duracao concluida" />
      <Estatistica valor="58%" titulo="Perc. Concluido" />
    </div>
  )
}
