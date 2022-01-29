/** 購入履歴情報 */
export interface PurchaseHistoryData {
  id: number
  purchaseDate: Date
  usecaseId: number
  storeName: string
  itemName: string
  billingMethodId: number
  price: number
  personId?: number
  note?: string
}
