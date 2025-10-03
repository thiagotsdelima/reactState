import MenuItem from '@/components/MenuItem'
import { IconForms } from '@tabler/icons-react'

export default function Home() {
  return (
    <div>
      <MenuItem icon={<IconForms />} texto="Estado" url="/revisao/estado" />
    </div>
  )
}
