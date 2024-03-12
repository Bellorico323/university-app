'use client'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

const loginFormSchema = z.object({
  email: z.string().email(),
})

type loginFormData = z.infer<typeof loginFormSchema>

export function Form() {
  const { register, handleSubmit } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLoginSubmit(data: loginFormData) {
    console.log(data)

    await signIn('email', { email: data.email })
  }

  return (
    <form
      className="flex flex-col space-y-6 rounded-md bg-neutral-900 p-8"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <h1 className="text-xl font-medium text-neutral-50">Login</h1>
      <div className="flex flex-col gap-2 p-2">
        <label htmlFor="email" className="text-neutral-200">
          Email
        </label>
        <Input.Root>
          <Input.Control id="email" placeholder="" {...register('email')} />
        </Input.Root>
      </div>
      <Button variant="secondary" className="grow p-3" type="submit">
        Enviar
      </Button>
    </form>
  )
}
