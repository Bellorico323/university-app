'use client'

import Link from 'next/link'
import { Button } from './Button'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { createEditUrl } from '@/utils/createEditUrl'

interface EditButton {
  id: string
  url: string
}

export function CreateButton({ url }: { url: string }) {
  return (
    <Link href={url}>
      <Button
        variant="primary"
        className="flex items-center justify-center gap-2 p-3"
      >
        Cadastrar novo
        <Plus className="h-5 w-5" />
      </Button>
    </Link>
  )
}

export function EditButton({ id, url }: EditButton) {
  const path = createEditUrl(url, id)

  return (
    <Link href={`${path}`}>
      <Button variant="outline" className="p-3">
        <Pencil className="h-4 w-4" />
      </Button>
    </Link>
  )
}

export function DeleteButton() {
  return (
    <Button variant="outline" className="p-3">
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
