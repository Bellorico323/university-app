import { Sidebar } from '../ui/Sidebar'
import { Header } from '@/app/ui/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="h-full max-w-[100vw] pb-12 pt-24  lg:col-start-2 lg:pb-12 lg:pt-8">
        <Header />
        {children}
      </div>
    </div>
  )
}
