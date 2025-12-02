interface EstatisticaProps {
  valor: number | string
  titulo: string
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-blue-600">{props.valor}</span>
      <span className="text-sm text-gray-600">{props.titulo}</span>
    </div>
  )
}
