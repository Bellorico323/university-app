'use client'
import { cn } from '@/lib/utils'
import { BookType, Library, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  Icon: ElementType
  path: string
}

export function NavItems() {
  const pathname = usePathname()

  const links: NavItemProps[] = [
    { title: 'Alunos', Icon: Users, path: '/students' },
    { title: 'Matérias', Icon: BookType, path: '/subjects' },
    { title: 'Cursos', Icon: Library, path: '/courses' },
    { title: 'Endereços', Icon: MapPin, path: '/addresses' },
  ]

  return (
    <div>
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            className={cn(
              'group flex grow items-center justify-start gap-3 rounded p-2 hover:bg-neutral-800',
              {
                'hover:  bg-indigo-700 text-neutral-100 hover:bg-indigo-800':
                  pathname === link.path,
              },
            )}
            key={link.path}
          >
            <link.Icon className="h-5 w-5 text-neutral-100 group-hover:text-neutral-300" />
            <span className="text-neutral-100 group-hover:text-neutral-300">
              {link.title}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
