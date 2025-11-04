import { CarrinhoContext } from '@/context/CarrinhoContext'
import { ItemCarrinho } from '@/data/model/ItemCarrinho'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useContext } from 'react'

interface ItemCarrinhoCardProps {
  item: ItemCarrinho
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
  const { item } = props
  const { adicionarItem } = useContext(CarrinhoContext)

  return (
    <div className="flex flex-row justify-center items-center gap-5 bg-black rounded-b-md p-2">
      <span className="text-center">{item.produtos.nome}</span>
      <div className="flex gap-2 items-center">
        <button className="h-5 w-5 bg-red-500 rounded-b-sm flex justify-center items-center">
          <IconMinus />
        </button>
        <span>{item.quantidade}</span>
        <button className="h-5 w-5 bg-green-500 rounded-b-sm flex justify-center items-center">
          <IconPlus onClick={() => adicionarItem(item.produtos)} />
        </button>
      </div>
    </div>
  )
}
