import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  icon: any
  url: string
  texto: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className="flex flex-col items-center gap-2">
      <div className="bg-gradient-to-r from-blue-500 outline-green-500 rounded-sm p-4">
        {React.cloneElement(props.icon, {
          size: 70,
          stroke: 1,
          className: 'opacity-40'
        })}
      </div>
      <span className="opacity-30 font-black text-2xl">{props.texto}</span>
    </Link>
  )
}
