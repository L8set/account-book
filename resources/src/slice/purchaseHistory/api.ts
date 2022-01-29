import { PickRequestParams } from '@/type/api'
import { PurchaseHistoryData } from './type'

export async function postPurchaseHistory(
  request: PickRequestParams<PurchaseHistoryData>
): Promise<PurchaseHistoryData> {
  return {
    id: 3,
    ...request,
  }
}

export async function fetchPurchaseHistories(): Promise<PurchaseHistoryData[]> {
  return [
    {
      id: 1,
      purchaseDate: new Date(),
      usecaseId: 1,
      storeName: '店A',
      itemName: '品A',
      billingMethodId: 1,
      price: 123,
    },
    {
      id: 2,
      purchaseDate: new Date(),
      usecaseId: 2,
      storeName: '店B',
      itemName: '品B',
      billingMethodId: 2,
      price: 1234,
    },
  ]
}
