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
import { Pencil, Plus, Search, Trash2 } from 'lucide-react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Endereços',
}

export default function Page() {
  return (
    <main className="">
      <form className="flex gap-4 p-8">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label htmlFor="name" className="text-neutral-300">
            Cidade
          </label>
          <Input.Root>
            <Input.Control id="name" />
          </Input.Root>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label htmlFor="course" className="text-neutral-300">
            Bairro
          </label>
          <Input.Root>
            <Input.Control id="course" />
          </Input.Root>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label htmlFor="registration" className="text-neutral-300">
            Número
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
              <TableHead className="w-[90px]"></TableHead>
              <TableHead className="w-[360px]">Estado</TableHead>
              <TableHead className="w-[400px]">Cidade</TableHead>
              <TableHead className="w-[500px]">Bairro</TableHead>
              <TableHead className="w-[200px]">Número</TableHead>
              <TableHead className="text-right"></TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 7 }).map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Button
                      variant="ghost"
                      className="p-3 hover:bg-neutral-800"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">São Paulo</TableCell>
                  <TableCell>Santo André</TableCell>
                  <TableCell>Bairro Jardim das flores</TableCell>
                  <TableCell>Nr. 1920</TableCell>
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
