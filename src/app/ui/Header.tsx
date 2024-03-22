import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="w-full border-b border-neutral-900 px-8 py-3">
      {children}
    </header>
  )
}
