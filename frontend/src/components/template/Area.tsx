interface AreaProps {
  titulo: string
  sumario?: string
  children: any
  cor: string
}

export default function Area(props: AreaProps) {
  return (
    <>
      <div
        className={`flex flex-col bg-${props.cor}-600 items-center rounded-b-md w-full`}
      >
        <div
          className={`flex w-full items-center ${
            props.sumario ? 'justify-between' : 'justify-center'
          } bg-black bg-pacity-20 h-14 text-3xl font-black opacity-70`}
        >
          <span className="px-4">{props.titulo}</span>
          <span className="flex items-center px-4 bg-black bg-opacity-20 h-full">
            {props.sumario && <span>{props.sumario}</span>}
          </span>
        </div>
      </div>
      <div className="p-7">{props.children}</div>
    </>
  )
}
