import { fetchStudentsCount } from '@/app/api/actions/students-actions'
import { Header } from '@/app/ui/Header'
import { Pagination } from '@/app/ui/Pagination'
import { CreateButton } from '@/app/ui/TableButtons'
import { SearchStudents } from '@/app/ui/students/search-students'
import { StudentsTable } from '@/app/ui/students/table'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alunos',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    name?: string
    course?: string
    registration?: string
    page?: string
  }
}) {
  const query = {
    name: searchParams?.name || '',
    course: searchParams?.course || '',
    registration: searchParams?.registration || '',
  }
  console.log(searchParams)

  const currentPage = Number(searchParams?.page) || 1

  const totalCount = await fetchStudentsCount()

  return (
    <>
      <Header>
        <h1 className="text-3xl text-neutral-100">Alunos</h1>
      </Header>
      <main className="">
        <SearchStudents />

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
