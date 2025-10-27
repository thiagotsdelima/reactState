import Produtos from '@/data/model/Produtos'
import Real from '@/utils/Real'
import { IconCategoryPlus } from '@tabler/icons-react'
import Image from 'next/image'

interface ProdutoCardProps {
  produto: Produtos
}

export default function ProdutoCard(props: ProdutoCardProps) {
  const { produto } = props

  return (
    <div className="flex flex-col gap-3 bg-black rounded-md p-2 overflow-hidden">
      <Image
        src={produto.imagem}
        alt={produto.nome}
        width={300}
        height={300}
        className="rounded-md"
      />
      <div className="flex justify-between items-center px-4">
        <h2 className="font-black text-xl">{produto.nome}</h2>
        <p className="text-green-400 text-md">{Real.format(produto.preco)}</p>
      </div>
      <p className="text-sm px-4 text-zinc-400">{produto.descricao}</p>
      <button className="flex gap-2 px-4 py-2 rounded-md flex-1 bg-blue-500 hover:bg-blue-700 cursor-pointer items-center justify-center">
        <IconCategoryPlus className="w-6 h-6 text-white" /> adicionar ao
        carrinho
      </button>
    </div>
  )
}
