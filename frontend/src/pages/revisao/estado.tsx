import Area from '@/components/template/Area'
import { useState } from 'react'

export default function Estado() {
  const [texto, setTexto] = useState('')

  return (
    <div className="p-20">
      <Area titulo="Criando Estado" cor="sky">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full border border-sky-500/40 bg-zinc-800/60 rounded px-3 py-2 text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          placeholder="Digite algo..."
        />
      </Area>
      <h1>{texto}</h1>
    </div>
  )
}
