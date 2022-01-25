import { PurchaseHistory } from '@component/page/PurchaseHistory'
import { PurchaseResistration } from '@component/page/PurchaseResistration'
import { Top } from '@component/page/Top'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Top />}>
        <Route path="histories" element={<PurchaseHistory />} />
        <Route path="registration" element={<PurchaseResistration />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
