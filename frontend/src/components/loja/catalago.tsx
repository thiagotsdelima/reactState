import produtos from '@/data/constants/produtos'
import Area from '../template/Area'
import ProdutoCard from './produtoCard'

export default function Catalago() {
  function renderizarProdutos() {
    return produtos.map((produto) => (
      <ProdutoCard produto={produto} key={produto.id} />
    ))
  }

  return (
    <Area titulo="Catalago" cor="black">
      <div className="flex flex-wrap p-2 gap-4 justify-around">
        {renderizarProdutos()}
      </div>
    </Area>
  )
}
