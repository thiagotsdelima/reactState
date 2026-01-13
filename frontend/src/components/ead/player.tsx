import CursoContext from '@/context/CursoContext'
import capitulos from '@/data/constants/capitulos'
import { useContext } from 'react'

export default function Player() {
  const { aulaAtual } = useContext(CursoContext)
  return (
    <div className="flex flex-col justify-center p-2 items-center w-4/5 h-3/5 bg-white/50 rounded-lg">
      <span className="text-xl font-black">{aulaAtual.titulo}</span>
      <div className="aspect-video h-full p-2">
        <iframe
          id="odysee-iframe"
          width="100%"
          height="100%"
          src={aulaAtual.videoUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
