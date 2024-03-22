import { Header } from '@/app/ui/Header'
import { EditStudentForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id

  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Matérias', href: '/subjects' },
            {
              label: 'Editar matéria',
              href: `/subjects/${id}/edit`,
              active: true,
            },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <EditStudentForm />
      </main>
    </div>
  )
}
