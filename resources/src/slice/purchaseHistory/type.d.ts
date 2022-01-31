import { IDataRecord } from '@/type/api'

/** 購入履歴情報 */
export interface PurchaseHistoryRecord extends IDataRecord {
  purchaseDate: string
  usecaseId: number
  storeName: string
  itemName: string
  billingMethodId: number
  price: number
  personId?: number
  note?: string
}
