import { useContext } from 'react'
import Area from '../template/Area'
import CarrinhoVazio from './carrinhoVazio'
import { CarrinhoContext } from '@/context/CarrinhoContext'
import ItemCarrinhoCard from './itemCarrinhoCard'
import Real from '@/utils/Real'

export default function Produtos() {
  const { itens, valorTotal } = useContext(CarrinhoContext)
  return (
    <Area titulo="Produtos" cor="black" sumario={Real.format(valorTotal)}>
      <div className="flex flex-col flex-wrap justify-center gap-4">
        {itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          itens.map((item) => {
            return <ItemCarrinhoCard key={item.produtos.id} item={item} />
          })
        )}
      </div>
    </Area>
  )
}
