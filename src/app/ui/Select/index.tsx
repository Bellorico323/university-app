'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectInputProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({
  children,
  placeholder,
  ...props
}: SelectInputProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="group flex w-full items-center justify-between gap-2 rounded-lg border border-neutral-700 px-3 py-2 text-neutral-200 shadow-sm focus-within:ring-2 focus-within:ring-neutral-200">
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className=" z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-700 bg-neutral-900 shadow-sm"
        >
          <Select.Viewport className="outline-none">{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
