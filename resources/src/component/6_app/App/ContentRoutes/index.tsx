import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PurchaseHistory } from '@component/page/PurchaseHistory'
import { PurchaseResistration } from '@component/page/PurchaseResistration'
import { Top } from '@component/page/Top'

export const ContentRoutes: FC = () => (
  <div>
    ルート
    <Routes>
      <Route path="/" element={<Top />}>
        <Route path="histories" element={<PurchaseHistory />} />
        <Route path="registration" element={<PurchaseResistration />} />
      </Route>
    </Routes>
  </div>
)
