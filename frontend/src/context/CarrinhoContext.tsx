import { ItemCarrinho } from '@/data/model/ItemCarrinho'
import Produtos from '@/data/model/Produtos'
import { createContext, useState } from 'react'

interface CarrinhoContextProps {
  itens: ItemCarrinho[]
  adicionarItem: (produtos: Produtos) => void
  removerItem: (produtos: Produtos) => void
  valorTotal: number
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

  /*
    function removerItem(produtos: Produtos) {
      const novoItems = itens.map((item) => {
      return item.produtos.id === produtos.id ? { ...item, quantidade: item.quantidade - 1 } : item
    }).filter((item) => item.quantidade > 0)
      setItens(novoItems)
    }
  */

  function removerItem(produtos: Produtos) {
    const existeItem = itens.find((item) => item.produtos.id === produtos.id)
    if (!existeItem) return
    const novaQuantidade = existeItem.quantidade - 1
    let itensAtualizados: ItemCarrinho[] = []
    if (novaQuantidade > 0) {
      const itemAtualizado = { ...existeItem, quantidade: novaQuantidade }
      const itensSemItemAtualizado = itens.filter(
        (item) => item.produtos.id !== produtos.id
      )
      itensAtualizados = [...itensSemItemAtualizado, itemAtualizado]
    } else {
      itensAtualizados = itens.filter(
        (item) => item.produtos.id !== produtos.id
      )
    }
    setItens(itensAtualizados.sort(ordernaItem))
  }

  function cauculaTotalItens() {
    return itens.reduce((total, item: ItemCarrinho) => {
      const subtotal = item.quantidade * item.produtos.preco
      return total + subtotal
    }, 0)
  }

  function ordernaItem(a: ItemCarrinho, b: ItemCarrinho) {
    // return a.produtos.nome > b.produtos.nome ? -1 : 1
    return a.produtos.nome.localeCompare(b.produtos.nome)
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        get valorTotal() {
          return cauculaTotalItens()
        }
      }}
    >
      {props.children}
    </CarrinhoContext.Provider>
  )
}
