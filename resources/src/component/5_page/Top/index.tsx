import { store } from '@/app/store'
import { Header } from '@/component/3_organism/Header'
import { updateBankAccounts } from '@/slice/bankAccount'
import { updateBillingMethods } from '@/slice/billingMethod'
import { updatePersons } from '@/slice/person'
import { updatePurchaseHistories } from '@/slice/purchaseHistory'
import { updateUsecases } from '@/slice/usecase'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const Top: FC = () => {
  const dispatch = useDispatch()
  const asyncThunks = [
    updateBankAccounts,
    updateBillingMethods,
    updatePersons,
    updatePurchaseHistories,
    updateUsecases,
  ]
  asyncThunks.forEach((asyncThunk) => dispatch(asyncThunk()))

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
