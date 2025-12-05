import Capitulo from '@/data/model/Capitulo'
import AulaItem from './aulaItem'

interface CapitulosItemProps {
  capitulo: Capitulo
}

export default function CapitulosItem(props: CapitulosItemProps) {
  const { capitulo } = props

  return (
    <div>
      <div className="flex items-center gap-3 p-4 bg-zinc-900">
        <div
          className="
            flex justify-center items-center w-9 h-9 
            rounded-full bg-black border border-zinc-400
          "
        >
          {capitulo.ordem}
        </div>
        <div>{capitulo.titulo}</div>
      </div>
      <div className="p-4">
        {capitulo.aulas.map((aula) => {
          return <AulaItem key={aula.ordem} aula={aula} selecionada={false} />
        })}
      </div>
    </div>
  )
}
