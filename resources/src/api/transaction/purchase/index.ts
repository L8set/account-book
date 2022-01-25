import { Purchase, PurchaseHistory } from '@/type/transaction/purchase'

export const postPurchaseHistory = async (
  purchase: Purchase
): Promise<PurchaseHistory> => {
  return {
    id: 3,
    ...purchase,
  }
}

export const fetchPurchaseHistories = async (): Promise<PurchaseHistory[]> => {
  return [
    {
      id: 1,
      billingMethod: 1,
    },
    {
      id: 2,
      billingMethod: 2,
    },
  ]
}
