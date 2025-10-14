import { useContext } from 'react'
import Area from '../template/Area'
import ContadorContext from '@/context/ContadorContext'

export default function Mais() {
  const ctx = useContext(ContadorContext)
  return (
    <div className="bg-blue-600 flex-1 text-center items-center justify-center">
      <Area titulo="Botao Mais" cor="blue">
        <button
          onClick={ctx.increment}
          className="px-4 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-700 transition"
        >
          +1
        </button>
      </Area>
    </div>
  )
}
