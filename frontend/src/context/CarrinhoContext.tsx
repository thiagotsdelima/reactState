import { ItemCarrinho } from '@/data/model/ItemCarrinho'
import Produtos from '@/data/model/Produtos'
import { createContext, useState } from 'react'

interface CarrinhoContextProps {
  itens: ItemCarrinho[]
  adicionarItem: (produtos: Produtos) => void
}

export const CarrinhoContext = createContext<CarrinhoContextProps>({} as any)

export function CarrinhoProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  function adicionarItem(produtos: Produtos) {
    const existeItem = itens.find(
      (item) => item.produtos.id === produtos.id
    ) ?? { produtos, quantidade: 0 }
    const novoItem = { ...existeItem, quantidade: existeItem.quantidade + 1 }
    const itensSemItemAtualizado = itens.filter(
      (item) => item.produtos.id !== produtos.id
    )
    setItens([...itensSemItemAtualizado, novoItem].sort(ordernaItem))
  }

  function ordernaItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produtos.nome.localeCompare(b.produtos.nome)
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}
