import Mais from '@/components/basico/mais'
import Menos from '@/components/basico/menos'
import Valor from '@/components/basico/valor'
import { ContadorProvider } from '@/context/ContadorContext'

export default function Basico() {
  return (
    <div className="p-20 flex-1 flex-col gap-6 items-center justify-center">
      <ContadorProvider>
        <div className="mb-4">
          <Valor />
        </div>
        <div className="flex gap-4">
          <Menos />
          <Mais />
        </div>
      </ContadorProvider>
    </div>
  )
}
