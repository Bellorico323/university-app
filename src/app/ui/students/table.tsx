import { fetchFilteredStudents } from '@/app/api/actions/students-actions'

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '../Table/table'
import { EditButton } from '../TableButtons'
import { DeleteDialog } from './delete-dialog'

export async function StudentsTable({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const students = await fetchFilteredStudents(query, currentPage)

  return (
    <Table>
      <TableHeader className="border-neutral-900">
        <TableRow>
          <TableHead className="w-[360px]">Nome</TableHead>
          <TableHead>Matricula</TableHead>
          <TableHead>Curso</TableHead>
          <TableHead>Telefone</TableHead>

          <TableHead className="text-right"></TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => {
          return (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.registration}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>{student.phone}</TableCell>

              <TableCell className="w-[30px] text-right">
                <EditButton url="/students/edit" id={student.id} />
              </TableCell>
              <TableCell className="w-[30px] text-right">
                <DeleteDialog studentId={student.id} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
