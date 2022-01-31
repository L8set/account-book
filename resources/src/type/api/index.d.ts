type AsyncStateStatus = 'initial' | 'updating' | 'updated'

export interface IDataRecord {
  id: number
}

export interface IDataState<DataRecord extends IDataRecord = IDataRecord> {
  records: DataRecord[]
  status: AsyncStateStatus
}

export type PickRequestParams<ResponseData> = Omit<ResponseData, 'id'>

export type DataRecordType<DataState> = DataState extends IDataState<
  infer DataRecord
>
  ? DataRecord
  : never
