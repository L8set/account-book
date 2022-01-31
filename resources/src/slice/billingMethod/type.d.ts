import { IDataRecord } from '@/type/api'

/** 支払方法情報 */
export interface BillingMethodRecord extends IDataRecord {
  method: string
}
