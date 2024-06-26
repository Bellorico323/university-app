import { Header } from '@/app/ui/Header'
import { CreateSubjectForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default function Page() {
  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Matérias', href: '/subjects' },
            { label: 'Criar matéria', href: '/subjects/create', active: true },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <CreateSubjectForm />
      </main>
    </div>
  )
}
