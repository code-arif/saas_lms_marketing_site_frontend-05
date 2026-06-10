import { useRoutes } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { routes } from '@/routes'

export default function App() {
  const element = useRoutes(routes)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {element}
      </div>
      <Footer />
    </div>
  )
}
