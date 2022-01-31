import { PurchaseHistory } from '@/component/5_page/PurchaseHistory'
import { PurchaseResistration } from '@/component/5_page/PurchaseResistration'
import { Top } from '@/component/5_page/Top'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}>
          <Route path="histories" element={<PurchaseHistory />} />
          <Route path="registration" element={<PurchaseResistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
