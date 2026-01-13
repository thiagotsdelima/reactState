import { IconCheck } from '@tabler/icons-react'

interface AulaConclusaoProps {
  concluido: boolean
  onClick?: () => void
}

export default function AulaConclusao(props: AulaConclusaoProps) {
  return (
    <button
      className={`
        flex justify-center items-center w-6 h-6 
        rounded-full border 
        ${
          props.concluido
            ? 'bg-green-500 border-green-500'
            : 'bg-black border-zinc-400'
        }
      `}
      onClick={props.onClick}
    >
      {props.concluido && <IconCheck size={14} color="white" />}
    </button>
  )
}
