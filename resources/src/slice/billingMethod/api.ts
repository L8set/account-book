import { PickRequestParams } from '@/type/api'
import { BillingMethodRecord } from './type'

export const postBillingMethod = async (
  request: PickRequestParams<BillingMethodRecord>
): Promise<BillingMethodRecord> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchBillingMethods = (): BillingMethodRecord[] => {
  return [
    {
      id: 1,
      method: '支払い方法名',
    },
  ]
}
