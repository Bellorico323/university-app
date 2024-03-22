import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn('md: flex text-xl md:text-3xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? 'text-neutral-300' : 'text-neutral-500',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
