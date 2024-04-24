'use client'

import { createStudent } from '@/app/api/actions/students-actions'
import { Button } from '@/app/ui/Button'
import { Input } from '@/app/ui/Input'
import { SelectInput } from '@/app/ui/Select'
import { SelectItem } from '@/app/ui/Select/SelectItem'
import { zodResolver } from '@hookform/resolvers/zod'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const createStudentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  cpf: z.string(),
  courseId: z.string(),
})

type createStudentInputs = z.infer<typeof createStudentSchema>

export function CreateStudentForm() {
  const { register, control, handleSubmit } = useForm<createStudentInputs>({
    resolver: zodResolver(createStudentSchema),
  })
  const redirect = useRouter()

  async function handleCreateStudent(data: createStudentInputs) {
    await createStudent(data).then(() => {
      redirect.push('/students')
    })
  }

  return (
    <form
      className="grid grid-cols-6 gap-4 "
      onSubmit={handleSubmit(handleCreateStudent)}
    >
      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="studentName" className="text-neutral-300">
          Nome do aluno
        </label>
        <Input.Root>
          <Input.Control id="studentName" {...register('name')} />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="cpf" className="text-neutral-300">
          CPF
        </label>
        <Input.Root>
          <Input.Control id="cpf" {...register('cpf')} />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="email" className="text-neutral-300">
          Email
        </label>
        <Input.Root>
          <Input.Control id="email" {...register('email')} />
        </Input.Root>
      </div>

      <div className="col-span-3 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="phone" className="text-neutral-300">
          Telefone
        </label>
        <Input.Root>
          <Input.Control id="phone" {...register('phone')} />
        </Input.Root>
      </div>

      <div className="col-span-2 flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="course" className="text-neutral-300">
          Curso
        </label>
        <Controller
          name="courseId"
          control={control}
          render={({ field: { name, onChange, value, disabled } }) => {
            return (
              <SelectInput
                placeholder="Selecione um curso"
                name={name}
                onValueChange={onChange}
                value={value}
                disabled={disabled}
              >
                <SelectItem
                  value="4e165373-4bee-41b9-93d3-ac090d477b22"
                  text="Engenharia"
                />
                <SelectItem value="bio  " text="Biologia" />
              </SelectInput>
            )
          }}
        ></Controller>
      </div>

      <div className="col-span-4" />

      <div className="col-span-4" />

      <div className="col-span-2 flex justify-end gap-5">
        <Link href={'/students'}>
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
          Criar aluno
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}
