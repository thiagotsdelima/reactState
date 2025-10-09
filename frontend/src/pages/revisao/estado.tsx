import Area from '@/components/template/Area'
import { useState } from 'react'

export default function Estado() {
  const [texto, setTexto] = useState('')

  return (
    <div className="container bg-green-700 p-20 mt-20 rounded-2xl">
      <Area titulo="Criando Estado" cor="sky">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full border border-white bg-zinc-800/60 rounded px-3 py-2 text-white outline-none focus:border-white focus:ring-1 focus:ring-white transition"
          placeholder="Digite algo..."
        />
      </Area>
      <h1>{texto}</h1>
    </div>
  )
}
