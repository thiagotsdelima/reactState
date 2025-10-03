import Link from 'next/link'

interface MenuItemProps {
  icon: any
  url: string
  texto: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      {props.icon}
      {props.texto}
    </Link>
  )
}
