import capitulos from '@/data/constants/capitulos'

export default function Player() {
  const aulaAtutal = capitulos[0].aulas[0]
  return (
    <div className="flex flex-col justify-center p-2 items-center w-4/5 h-3/5 bg-white/50 rounded-lg">
      <span className="text-xl font-black">{aulaAtutal.titulo}</span>
      <div className="aspect-video h-full p-2">
        <iframe
          id="odysee-iframe"
          width="100%"
          height="100%"
          src="https://odysee.com/%24/embed/%40wiseSolution%3A5%2Fjavascropt-modules-%3Ac?r=ACkZzmbdhT29jMdKDtpTJ7iPz7LzQ16E"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
