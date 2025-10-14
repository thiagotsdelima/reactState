import { useContext } from 'react'
import Area from '../template/Area'
import ContedorContext from '@/context/ContadorContext'

export default function Valor() {
  const { num } = useContext(ContedorContext)

  return (
    <div className="bg-green-600 text-center items-center justify-center">
      <Area titulo="valor Total" cor="blue">
        <span className="font-black text-6xl">{num}</span>
      </Area>
    </div>
  )
}
