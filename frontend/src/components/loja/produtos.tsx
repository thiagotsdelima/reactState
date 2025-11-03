import { useContext } from 'react'
import Area from '../template/Area'
import CarrinhoVazio from './carrinhoVazio'
import { CarrinhoContext } from '@/context/CarrinhoContext'
import ItemCarrinhoCard from './itemCarrinhoCard'

export default function Produtos() {
  const { itens } = useContext(CarrinhoContext)
  return (
    <Area titulo="Produtos" cor="black">
      {itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        itens.map((item) => {
          return <ItemCarrinhoCard key={item.produtos.id} item={item} />
        })
      )}
    </Area>
  )
}
