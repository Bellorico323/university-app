import { fetchStudentsCount } from '@/app/api/actions/students-actions'
import { Button } from '@/app/ui/Button'
import { Header } from '@/app/ui/Header'
import { Input } from '@/app/ui/Input'
import { Pagination } from '@/app/ui/Pagination'
import { CreateButton } from '@/app/ui/TableButtons'
import { StudentsTable } from '@/app/ui/students/table'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alunos',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  const totalCount = await fetchStudentsCount()

  return (
    <>
      <Header>
        <h1 className="text-3xl text-neutral-100">Alunos</h1>
      </Header>
      <main className="">
        <form className="flex gap-4 p-8">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="name" className="text-neutral-300">
              Nome
            </label>
            <Input.Root>
              <Input.Control id="name" />
            </Input.Root>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="course" className="text-neutral-300">
              Curso
            </label>
            <Input.Root>
              <Input.Control id="course" />
            </Input.Root>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="registration" className="text-neutral-300">
              Matrícula
            </label>
            <Input.Root>
              <Input.Control id="registration" />
            </Input.Root>
          </div>

          <Button variant="outline" className="self-end px-3 py-2">
            Filtrar
          </Button>
        </form>

        <div className="flex flex-col p-8">
          <div className="ml-auto">
            <CreateButton url="/students/create"></CreateButton>
          </div>
          <StudentsTable query={query} currentPage={currentPage} />
          <Pagination totalCount={totalCount || 10} />
        </div>
      </main>
    </>
  )
}
