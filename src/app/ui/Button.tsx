import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-md px-4 text-sm font-bold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-indigo-600 text-neutral-300 hover:bg-indigo-800',
      secondary: 'bg-emerald-600 text-neutral-300 hover:bg-emerald-800',
      ghost:
        'rounded-md px-2 hover:bg-neutral-900 shadow-none text-neutral-100',
      outline:
        'border border-neutral-700 text-neutral-300 hover:bg-neutral-700',
    },
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
