/** 口座情報 */
export interface BankAccount {
  id: number
  account: string
}

/** 支払方法情報 */
export interface BillingMethod {
  id: number
  method: string
}

/** 人物情報 */
export interface Person {
  id: number
  person: string
}

/** 用途情報 */
export interface Usecase {
  id: number
  usecase: string
}
