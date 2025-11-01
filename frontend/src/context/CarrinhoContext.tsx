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
    setItens([...itens, { produtos, quantidade: 1 }])
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}
