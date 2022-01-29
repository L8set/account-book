import { PickRequestParams } from '@/type/api'
import { BillingMethodData } from './type'

export const postBillingMethod = async (
  request: PickRequestParams<BillingMethodData>
): Promise<BillingMethodData> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchBillingMethods = (): BillingMethodData[] => {
  return [
    {
      id: 1,
      method: '支払い方法名',
    },
  ]
}
