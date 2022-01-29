type AsyncStateStatus = 'initial' | 'updating' | 'updated'

export interface IDataBaseState<Data = object> {
  records: Data[]
  status: AsyncStateStatus
}

export type PickRequestParams<ResponseData> = Omit<ResponseData, 'id'>
