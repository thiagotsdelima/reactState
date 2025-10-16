import { IconShoppingCart } from '@tabler/icons-react'

export default function CarrinhoVazio() {
  return (
    <div className="flex flex-col items-center opacity-50">
      <IconShoppingCart
        size={100}
        className="m-auto text-gray-400"
        stroke={1}
      />
      <span>Nenhum item no carrinho!</span>
    </div>
  )
}
