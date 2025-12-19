import Aula from '@/data/model/Aula'
import AulaConclusao from './aulaConclusao'
import Duracao from '@/utils/duracao'
import { IconVideo } from '@tabler/icons-react'
import { useContext } from 'react'
import CursoContext from '@/context/CursoContext'

interface AulaItemProps {
  aula: Aula
  selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
  const { aula, selecionada } = props
  const { selecionarAula } = useContext(CursoContext)
  return (
    <div className="flex items-center gap-2 py-1">
      <AulaConclusao concluido={false} />
      <div
        className="flex-1 flex flex-col cursor-pointer"
        onClick={() => selecionarAula(aula)}
      >
        <span className={`${selecionada && 'text-yellow-400'}`}>
          {aula.ordem}.{aula.titulo}
        </span>
        <span className="text-xs text-zinc-400 -mt-1">
          Duracao de {Duracao.duracaoDe(props.aula.duracao)}
        </span>
      </div>
      <IconVideo size={20} stroke={1} className="text-zinc-500" />
    </div>
  )
}
