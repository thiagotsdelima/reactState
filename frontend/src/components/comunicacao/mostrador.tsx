import Area from '@/components/template/Area'
import GeraNumeroAleatorio from './geradorNumeroAleatorio'
import { useState } from 'react'

export default function Mostrador() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultado, setResultado] = useState(0)

  function gerar(numero: number) {
    setResultado(numero)
  }

  return (
    <div className=" bg-red-400">
      <div className="flex text-6xl items-center justify-center">
        {resultado}
      </div>
      <Area titulo="Mostrador" cor="blue">
        <div className="flex gap-5 p-5">
          <input
            type="number"
            value={n1}
            onChange={(e) => setN1(+e.target.value)}
            className="w-full border border-white bg-zinc-800/60 rounded px-3 py-2 text-white outline-none focus:border-white focus:ring-1 focus:ring-white transition"
          />
          <input
            type="number"
            value={n2}
            onChange={(e) => setN2(+e.target.value)}
            className="w-full border border-white bg-zinc-800/60 rounded px-3 py-2 text-white outline-none focus:border-white focus:ring-1 focus:ring-white transition"
          />
        </div>
        <GeraNumeroAleatorio num1={n1} num2={n2} gerarNumero={gerar} />
      </Area>
    </div>
  )
}
