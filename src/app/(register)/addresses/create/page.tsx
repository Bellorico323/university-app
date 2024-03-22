import { Header } from '@/app/ui/Header'
import { CreateAddressesForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default function Page() {
  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Endereços', href: '/addresses' },
            {
              label: 'Criar endereço',
              href: '/addresses/create',
              active: true,
            },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <CreateAddressesForm />
      </main>
    </div>
  )
}
