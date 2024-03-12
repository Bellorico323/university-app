import { ShieldHalf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex h-20 shrink-0 items-end rounded-lg bg-neutral-900 px-5 py-8">
        <ShieldHalf className="h-5 w-5 text-neutral-100" />
      </header>

      <div className="mt-4 flex grow gap-4">
        <div className="flex grow flex-col justify-center gap-6 rounded-lg bg-neutral-900 px-6 py-10 md:w-2/5 md:px-20">
          <strong className="text-3xl text-neutral-50">
            Bem vindo ao universidade UNO.
          </strong>
          <p
            className={`text-xl text-neutral-700 md:text-2xl md:leading-normal`}
          >
            Gerencie sua universidade com facilidade.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-neutral-100 transition-colors hover:bg-indigo-800 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex grow items-center justify-center border-none p-20">
          <Image
            src={'/hero.png'}
            width={2000}
            height={760}
            alt="Screenshot of the registration project"
            className="object-cover md:block"
            quality={100}
          />
        </div>
      </div>
    </main>
  )
}
