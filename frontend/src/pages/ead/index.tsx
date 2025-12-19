import Sala from '@/components/ead/sala'
import { CursoProvider } from '@/context/CursoContext'

export default function EADPage() {
  return (
    <CursoProvider>
      <Sala />
    </CursoProvider>
  )
}
