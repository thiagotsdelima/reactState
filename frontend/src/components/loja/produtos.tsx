import { useContext } from 'react'
import Area from '../template/Area'
import CarrinhoVazio from './carrinhoVazio'
import { CarrinhoContext } from '@/context/CarrinhoContext'

export default function Produtos() {
  const { itens } = useContext(CarrinhoContext)
  return (
    <Area titulo="Produtos" cor="black">
      {itens.length === 0 ? <CarrinhoVazio /> : <div>tem Itens</div>}
    </Area>
  )
}
