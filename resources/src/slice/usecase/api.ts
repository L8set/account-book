import { PickRequestParams } from '@/type/api'
import { UsecaseRecord } from './type'

export const postUsecase = async (
  request: PickRequestParams<UsecaseRecord>
): Promise<UsecaseRecord> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchUsecases = (): UsecaseRecord[] => {
  return [
    {
      id: 1,
      usecase: '用途名',
    },
  ]
}
