import { useContext } from 'react'
import Area from '../template/Area'
import ContadorContext from '@/context/ContadorContext'

export default function Menos() {
  const ctx = useContext(ContadorContext)
  return (
    <div className="bg-red-600 flex-1 text-center items-center justify-center">
      <Area titulo="Botao Menos" cor="blue">
        <button
          onClick={ctx.decrement}
          className="px-4 py-3 bg-red-500 hover:bg-red-700 text-white text-lg rounded"
        >
          -1
        </button>
      </Area>
    </div>
  )
}
