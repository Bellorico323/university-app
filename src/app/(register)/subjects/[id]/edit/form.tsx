import { Button } from '@/app/ui/Button'
import { Input } from '@/app/ui/Input'
import { SelectInput } from '@/app/ui/Select'
import { SelectItem } from '@/app/ui/Select/SelectItem'
import { TextArea } from '@/app/ui/Textarea'

import { Clock, Pencil } from 'lucide-react'
import Link from 'next/link'

export function EditStudentForm() {
  return (
    <form className="grid grid-cols-6 gap-4 ">
      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="subjectName" className="text-neutral-300">
          Nome da matéria
        </label>
        <Input.Root>
          <Input.Control
            id="subjectName"
            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-start gap-2">
        <label htmlFor="course" className="text-neutral-300">
          Curso
        </label>
        <SelectInput placeholder="Selecione um curso">
          <SelectItem value="eng" text="Engenharia" />
          <SelectItem value="bio  " text="Biologia" />
        </SelectInput>
      </div>

      <div className="col-span-6 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="workload" className="text-neutral-300">
          Carga horária
        </label>
        <Input.Root>
          <Input.Prefix>
            <Clock className="h-5 w-5 text-neutral-500" />
          </Input.Prefix>
          <Input.Control id="workload" type="number" />
        </Input.Root>
      </div>

      <div className="col-span-6 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="description" className="text-neutral-300">
          Descrição
        </label>
        <TextArea />
      </div>

      <div className="col-span-4"></div>

      <div className="col-span-2 flex justify-end gap-5">
        <Link href={'/subjects'}>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-3 p-3"
          >
            Cancelar
          </Button>
        </Link>

        <Button
          variant="tertiary"
          className=" flex items-center justify-center gap-2 p-3"
        >
          Editar matéria
          <Pencil className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}
