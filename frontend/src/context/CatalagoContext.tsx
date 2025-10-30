import produtos from '@/data/constants/produtos'
import Produtos from '@/data/model/Produtos'
import { createContext } from 'react'

interface CatalagoContextProps {
  produtos: Produtos[]
}

export const CatalagoContext = createContext<CatalagoContextProps>({} as any)

export function CatalagoProvider(props: any) {
  return (
    <CatalagoContext.Provider
      value={{
        produtos
      }}
    >
      {props.children}
    </CatalagoContext.Provider>
  )
}
