import { PickRequestParams } from '@/type/api'
import { BankAccountRecord } from './type'

export const postBankAccount = async (
  request: PickRequestParams<BankAccountRecord>
): Promise<BankAccountRecord> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchBankAccounts = async (): Promise<BankAccountRecord[]> => {
  return [
    {
      id: 1,
      account: '銀行名',
    },
  ]
}
