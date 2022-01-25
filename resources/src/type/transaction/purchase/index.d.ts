/** 購入情報 */
export interface Purchase {
  billingMethod: number
}

/** 購入履歴情報 */
export interface PurchaseHistory extends Purchase {
  id: number
}
