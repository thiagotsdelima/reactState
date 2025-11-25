import { useContext } from 'react'
import Area from '../template/Area'
import CarrinhoVazio from './carrinhoVazio'
import { CarrinhoContext } from '@/context/CarrinhoContext'
import ItemCarrinhoCard from './itemCarrinhoCard'
import Real from '@/utils/Real'
import { IconX } from '@tabler/icons-react'

export default function Produtos() {
  const { itens, valorTotal, limpar } = useContext(CarrinhoContext)
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <Area titulo="Produtos" cor="black" sumario={Real.format(valorTotal)}>
        <div className="flex flex-wrap justify-center gap-4">
          {itens.length === 0 ? (
            <CarrinhoVazio />
          ) : (
            itens.map((item) => {
              return <ItemCarrinhoCard key={item.produtos.id} item={item} />
            })
          )}
        </div>
      </Area>
      {itens.length > 0 && (
        <button
          className="w-38 h-8 bg-red-500 hover:bg-red-700 rounded-md flex justify-center items-center"
          onClick={limpar}
        >
          <IconX /> Limpar Carrinho
        </button>
      )}
    </div>
  )
}
