import { Form } from './form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form />
    </div>
  )
}
