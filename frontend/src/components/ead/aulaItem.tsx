import Aula from '@/data/model/Aula'
import AulaConclusao from './aulaConclusao'

interface AulaItemProps {
  aula: Aula
  selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
  const { aula, selecionada } = props
  return (
    <div className="">
      <AulaConclusao concluido={false} />
      <div>
        <span>{aula.titulo}</span>
      </div>
    </div>
  )
}
