import Catalago from '@/components/loja/catalago'
import Produtos from '@/components/loja/produtos'

export default function Loja() {
  return (
    <div className="flex flex-col p-7 gap-4 rounded-b-lg">
      <div className="bg-green-700">
        <Produtos />
      </div>
      <div className="bg-red-700">
        <Catalago />
      </div>
    </div>
  )
}
