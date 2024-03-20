import { Sidebar } from '../ui/Sidebar'
import { Header } from '@/app/ui/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <div>
        <Sidebar />
      </div>
      <div className="max-w-[100vw] lg:col-start-2 lg:pb-0 lg:pt-8">
        <Header />
        {children}
      </div>
    </div>
  )
}
