import { createContext, useState } from 'react'

interface ContadorContextProps {
  num: number
  increment: () => void
  decrement: () => void
}

const ContadorContext = createContext<ContadorContextProps>({} as any)

export function ContadorProvider(props: any) {
  const [num, setNum] = useState(0)

  function increment() {
    setNum(num + 1)
  }

  function decrement() {
    setNum(num - 1)
  }

  return (
    <ContadorContext.Provider
      value={{
        num,
        increment,
        decrement
      }}
    >
      {props.children}
    </ContadorContext.Provider>
  )
}

export default ContadorContext
