import Area from '../template/Area'

interface GeraNumeroAleatorioProps {
  num1: number
  num2: number
  gerarNumero: (resultado: number) => void
}

export default function GeraNumeroAleatorio(props: GeraNumeroAleatorioProps) {
  const min = Math.min(props.num1, props.num2)
  const max = Math.max(props.num1, props.num2)

  function gerarNumeroAgora() {
    const aleatorio = Math.round(Math.random() * (max - min) + min)
    props.gerarNumero(aleatorio)
  }

  return (
    <div className="bg-blue-400 flex flex-col items-center p-5 gap-5">
      <Area titulo="Gerar Numero" cor="blue">
        <div className="flex justify-center gap-5 p-5">
          <span>MAX {max}</span>
          <span>MIN {min}</span>
        </div>
      </Area>
      <button
        className="py-5 px-5 bg-zinc-400 text-white hover:bg-zinc-800 cursor-pointer rounded-md"
        onClick={gerarNumeroAgora}
      >
        Gerar
      </button>
    </div>
  )
}
