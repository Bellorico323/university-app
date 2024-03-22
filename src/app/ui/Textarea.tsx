import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full gap-2 rounded-lg border border-neutral-700 bg-transparent px-3 py-2 text-neutral-100 shadow-sm focus-within:ring-2 focus-within:ring-neutral-200"
      {...props}
    />
  )
}
