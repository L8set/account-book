import { PickRequestParams } from '@/type/api'
import { BankAccountData } from './type'

export const postBankAccount = async (
  request: PickRequestParams<BankAccountData>
): Promise<BankAccountData> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchBankAccounts = async (): Promise<BankAccountData[]> => {
  return [
    {
      id: 1,
      account: '銀行名',
    },
  ]
}
