import { SignOutButton } from './SignOutButton'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/Bellorico323.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col  truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Murillo Orico
        </span>
        <span className="truncate text-sm  text-zinc-500 dark:text-zinc-400">
          mabo.orico@gmail.com
        </span>
      </div>
      <SignOutButton />
    </div>
  )
}
