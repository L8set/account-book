import { PickRequestParams } from '@/type/api'
import { PurchaseHistoryRecord } from './type'

export async function postPurchaseHistory(
  request: PickRequestParams<PurchaseHistoryRecord>
): Promise<PurchaseHistoryRecord> {
  return {
    id: 3,
    ...request,
  }
}

export async function fetchPurchaseHistories(): Promise<
  PurchaseHistoryRecord[]
> {
  return [
    {
      id: 1,
      purchaseDate: '2022-01-01',
      usecaseId: 1,
      storeName: '店A',
      itemName: '品A',
      billingMethodId: 1,
      price: 123,
    },
    {
      id: 2,
      purchaseDate: '2022-01-02',
      usecaseId: 2,
      storeName: '店B',
      itemName: '品B',
      billingMethodId: 2,
      price: 1234,
    },
  ]
}
