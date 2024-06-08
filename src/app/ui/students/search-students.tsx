'use client'

import { z } from 'zod'
import { Button } from '../Button'
import { Input } from '../Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { createQueryParams } from '@/utils/createQueryParams'

const searchStudentsSchema = z.object({
  name: z.string(),
  course: z.string(),
  registration: z.string(),
})

export type searchParamsInput = z.infer<typeof searchStudentsSchema>

export function SearchStudents() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const { handleSubmit, register, reset } = useForm<searchParamsInput>({
    resolver: zodResolver(searchStudentsSchema),
    defaultValues: {
      name: '',
      course: '',
      registration: '',
    },
  })

  function setQueryFilters(query: searchParamsInput) {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    const filterParams = createQueryParams<searchParamsInput>(params, query)

    replace(`${pathname}?${filterParams.toString()}`)
  }

  function clearFields() {
    reset()
  }

  return (
    <form className="flex gap-4 p-8" onSubmit={handleSubmit(setQueryFilters)}>
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="name" className="text-neutral-300">
          Nome
        </label>
        <Input.Root>
          <Input.Control id="name" {...register('name')} />
        </Input.Root>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="course" className="text-neutral-300">
          Curso
        </label>
        <Input.Root>
          <Input.Control id="course" {...register('course')} />
        </Input.Root>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <label htmlFor="registration" className="text-neutral-300">
          Matrícula
        </label>
        <Input.Root>
          <Input.Control id="registration" {...register('registration')} />
        </Input.Root>
      </div>

      <Button variant="outline" className="self-end px-3 py-2" type="submit">
        Filtrar
      </Button>

      <Button
        variant="outline"
        className="self-end px-3 py-2"
        onClick={() => {
          clearFields()
        }}
      >
        Limpar
      </Button>
    </form>
  )
}
