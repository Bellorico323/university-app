import { Header } from '@/app/ui/Header'
import { EditStudentForm } from './form'
import Breadcrumbs from '@/app/ui/Breadcrumbs'
import { fetchStudentById } from '@/app/api/actions/students-actions'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id

  const student = await fetchStudentById(id)

  if (!student) {
    throw new Error('Student not found')
  }

  return (
    <div>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Alunos', href: '/students' },
            {
              label: 'Editar aluno',
              href: `/students/${id}/edit`,
              active: true,
            },
          ]}
        />
      </Header>
      <main className="py-8 pl-8 pr-32">
        <EditStudentForm student={student} />
      </main>
    </div>
  )
}
