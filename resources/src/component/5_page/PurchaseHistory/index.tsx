import { PurchaseHistoriesGrid } from '@/component/3_organism/PurchaseHistoriesGrid'
import { PageTemplate } from '@component/template/PageTemplate'
import { FC } from 'react'

export const PurchaseHistory: FC = () => {
  return <PageTemplate title="購入履歴" content={<PurchaseHistoriesGrid />} />
}
