import { ShieldHalf } from 'lucide-react'
import { Profile } from './Profile'
import { NavItems } from './NavItem'

export function Sidebar() {
  return (
    <aside className="flex h-screen flex-col space-y-10 border-r border-neutral-900 px-4 py-8">
      <div className="flex items-center justify-start gap-2">
        <ShieldHalf className="h-7 w-7 font-bold text-neutral-100" />
        <h1 className="text-2xl font-bold text-neutral-100">University UNO</h1>
      </div>

      <nav className="flex-1 space-y-0.5">
        <strong className="mb-5 text-neutral-400">Cadastros</strong>

        <NavItems />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <div className="h-px bg-neutral-900 dark:bg-neutral-700" />

        <Profile />
      </div>
    </aside>
  )
}
