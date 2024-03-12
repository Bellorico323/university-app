'use client'

import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <Button variant={'ghost'} className="p-2" onClick={() => signOut()}>
      <LogOut className="h-5 w-5 text-zinc-500" />
    </Button>
  )
}
