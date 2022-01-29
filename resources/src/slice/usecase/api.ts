import { PickRequestParams } from '@/type/api'
import { UsecaseData } from './type'

export const postUsecase = async (
  request: PickRequestParams<UsecaseData>
): Promise<UsecaseData> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchUsecases = (): UsecaseData[] => {
  return [
    {
      id: 1,
      usecase: '用途名',
    },
  ]
}
