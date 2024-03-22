import { Button } from '@/app/ui/Button'
import { Input } from '@/app/ui/Input'
import { SelectInput } from '@/app/ui/Select'
import { SelectItem } from '@/app/ui/Select/SelectItem'

import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateAddressesForm() {
  return (
    <form className="grid grid-cols-6 gap-4 ">
      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="studentName" className="text-neutral-300">
          Nome do aluno
        </label>
        <Input.Root>
          <Input.Control id="studentName" />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="cpf" className="text-neutral-300">
          CPF
        </label>
        <Input.Root>
          <Input.Control id="cpf" />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="email" className="text-neutral-300">
          Email
        </label>
        <Input.Root>
          <Input.Control id="email" />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="phone" className="text-neutral-300">
          Telefone
        </label>
        <Input.Root>
          <Input.Control id="phone" />
        </Input.Root>
      </div>

      <div className="col-span-2 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="course" className="text-neutral-300">
          Curso
        </label>
        <SelectInput placeholder="Selecione um curso">
          <SelectItem value="eng" text="Engenharia" />
          <SelectItem value="bio  " text="Biologia" />
        </SelectInput>
      </div>

      <div className="col-span-4 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="address" className="text-neutral-300">
          Endereço
        </label>
        <Input.Root>
          <Input.Control id="address" />
        </Input.Root>
      </div>

      <div className="col-span-4" />

      <div className="col-span-2 flex justify-end gap-5">
        <Link href={'/addresses'}>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-3 p-3"
          >
            Cancelar
          </Button>
        </Link>

        <Button
          variant="secondary"
          className=" flex items-center justify-center gap-2 p-3"
        >
          Criar endereço
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}
