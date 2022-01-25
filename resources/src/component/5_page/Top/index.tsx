import { Header } from '@/component/3_organism/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Top: FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
