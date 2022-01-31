import { IDataRecord } from '@/type/api'

/** 口座情報 */
export interface BankAccountRecord extends IDataRecord {
  account: string
}
