'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Header() {
  const [title, setTitle] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    switch (pathname) {
      case '/students':
        setTitle('Alunos')
        break
      case '/subjects':
        setTitle('Matérias')
        break
      case '/courses':
        setTitle('Cursos')
        break
      case '/addresses':
        setTitle('Endereços')
        break
      default:
        setTitle('Cadastros')
    }
  }, [pathname])

  return (
    <header className="w-full border-b border-neutral-900 px-8 py-3">
      <h1 className="text-3xl text-neutral-100">{title}</h1>
    </header>
  )
}
