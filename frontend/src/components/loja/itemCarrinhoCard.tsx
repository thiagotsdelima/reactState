import { CarrinhoContext } from '@/context/CarrinhoContext'
import { ItemCarrinho } from '@/data/model/ItemCarrinho'
import Real from '@/utils/Real'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useContext } from 'react'

interface ItemCarrinhoCardProps {
  item: ItemCarrinho
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
  const { item } = props
  const { adicionarItem, removerItem } = useContext(CarrinhoContext)

  return (
    <div className="flex flex-row justify-center items-center gap-5 bg-black rounded-b-md p-2">
      <span className="text-center">{item.produtos.nome}</span>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => removerItem(item.produtos)}
          className="h-5 w-5 bg-red-500 rounded-b-sm flex justify-center items-center"
        >
          <IconMinus />
        </button>
        <span>{item.quantidade}</span>
        <button className="h-5 w-5 bg-green-500 rounded-b-sm flex justify-center items-center">
          <IconPlus onClick={() => adicionarItem(item.produtos)} />
        </button>
      </div>
      <div className="bg-blue-500 rounded-sm px-2 font-black">
        {Real.format(item.produtos.preco * item.quantidade)}
      </div>
    </div>
  )
}
