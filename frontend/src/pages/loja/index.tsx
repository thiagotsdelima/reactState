import Catalago from '@/components/loja/catalago'
import Produtos from '@/components/loja/produtos'
import { CatalagoProvider } from '@/context/CatalagoContext'

export default function Loja() {
  return (
    <CatalagoProvider>
      <div className="flex flex-col p-7 gap-4 rounded-b-lg">
        <div className="bg-green-700">
          <Produtos />
        </div>
        <div className="bg-red-700">
          <Catalago />
        </div>
      </div>
    </CatalagoProvider>
  )
}
