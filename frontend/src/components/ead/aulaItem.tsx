import Aula from '@/data/model/Aula'
import AulaConclusao from './aulaConclusao'
import Duracao from '@/utils/duracao'
import { IconVideo } from '@tabler/icons-react'

interface AulaItemProps {
  aula: Aula
  selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
  const { aula, selecionada } = props
  return (
    <div className="flex items-center gap-2 py-1">
      <AulaConclusao concluido={false} />
      <div className="flex-1 flex flex-col cursor-pointer">
        <span
          className={`
            ${
              selecionada ? 'text-yellow-500' : 'text-zinc-300 hover:text-white'
            }
          `}
        >
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
