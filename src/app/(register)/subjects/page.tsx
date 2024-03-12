import { Button } from '@/app/ui/Button'
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
import { Pencil, Plus, Trash2 } from 'lucide-react'

export default function Page() {
  return (
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
          <Button
            variant="primary"
            className="flex items-center justify-center gap-2 p-3"
          >
            Cadastrar novo
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <Table>
          <TableHeader className="border-neutral-900">
            <TableRow>
              <TableHead className="w-[360px]">Nome</TableHead>
              <TableHead>Matricula</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead className="text-right"></TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 7 }).map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">Murillo Orico</TableCell>
                  <TableCell>AVSD3137178SDF</TableCell>
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
  )
}