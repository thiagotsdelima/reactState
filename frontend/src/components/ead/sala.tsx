import capitulos from '@/data/constants/capitulos'
import Estatisticas from './estatisticas'
import Player from './player'
import CapitulosItem from './capitulosItem'

export default function Sala() {
  const MOCK = capitulos
  return (
    <div className="flex">
      <div className="bg-zinc-800 w-96 h-screen overflow-auto">
        {MOCK.map((capitulo) => {
          return <CapitulosItem key={capitulo.id} capitulo={capitulo} />
        })}
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <Estatisticas />
        <Player />
      </div>
    </div>
  )
}
