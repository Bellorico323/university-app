import { Header } from '@/app/ui/Header'
import { CreateStudentForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default function Page() {
  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Alunos', href: '/students' },
            { label: 'Criar aluno', href: '/students/create', active: true },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <CreateStudentForm />
      </main>
    </div>
  )
}
