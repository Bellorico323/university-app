import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

const InputControl = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className={cn(
      'flex-1 border-0 bg-transparent p-0 text-neutral-200 placeholder-neutral-600 focus:outline-none',
      '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none', // remove setas do tipo number
      className,
    )}
    autoComplete="off"
    {...props}
    ref={ref}
  />
))
InputControl.displayName = 'InputControl'

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="group flex w-full items-center gap-2 rounded-lg border border-neutral-700 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-neutral-200"
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
