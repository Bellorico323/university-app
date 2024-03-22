import { Button } from '@/app/ui/Button'
import { Header } from '@/app/ui/Header'
import { Input } from '@/app/ui/Input'
import { Pagination } from '@/app/ui/Pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/ui/Table/table'
import { CreateButton } from '@/app/ui/TableButtons'
import { Pencil, Trash2 } from 'lucide-react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matérias',
}

export default function Page() {
  return (
    <>
      <Header>
        <h1 className="text-3xl text-neutral-100">Matérias</h1>
      </Header>
      <main className="">
        <form className="flex gap-4 p-8">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="name" className="text-neutral-300">
              Matéria
            </label>
            <Input.Root>
              <Input.Control id="name" />
            </Input.Root>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="course" className="text-neutral-300">
              Carga horária
            </label>
            <Input.Root>
              <Input.Control id="course" />
            </Input.Root>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="registration" className="text-neutral-300">
              Curso
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
            <CreateButton url="/subjects/create" />
          </div>
          <Table>
            <TableHeader className="border-neutral-900">
              <TableRow>
                <TableHead className="w-[360px]">Matéria</TableHead>
                <TableHead>Carga horária</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead className="text-right"></TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 7 }).map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      Engenharia de software
                    </TableCell>
                    <TableCell>120 horas</TableCell>
                    <TableCell>Engenharia</TableCell>
                    <TableCell className="w-[30px] text-right">
                      <Button variant="outline" className="p-3">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell className="w-[30px] text-right">
                      <Button variant="outline" className="p-3">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </main>
    </>
  )
}
