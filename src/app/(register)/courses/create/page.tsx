import { Header } from '@/app/ui/Header'
import { CreateCourseForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default function Page() {
  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Cursos', href: '/courses' },
            { label: 'Criar curso', href: '/courses/create', active: true },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <CreateCourseForm />
      </main>
    </div>
  )
}
