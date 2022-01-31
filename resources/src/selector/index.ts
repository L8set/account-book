import { RootState, store } from '@/app/store'
import { CONSTANTS } from '@/constant'
import { IDataState } from '@/type/api'
import { createSelector } from '@reduxjs/toolkit'

type DataName<Key extends keyof RootState = keyof RootState> =
  RootState[Key] extends IDataState ? Key : never
type DataState<T extends DataName> = RootState[T] extends IDataState<infer U>
  ? IDataState<U>
  : never
type DataRecord<T extends DataName> = DataState<T> extends IDataState<infer U>
  ? U
  : never
type DataSelector<T extends DataName> = (state: RootState) => DataState<T>
type RecordsSelector<T extends DataName> = (state: RootState) => DataRecord<T>[]
type IdRecordMapSelector<T extends DataName> = (
  state: RootState
) => Map<number, DataRecord<T>>

function assertStateData<T extends DataName>(
  data: unknown
): asserts data is DataState<T> {
  if (
    !data ||
    typeof data !== 'object' ||
    !('records' in data) ||
    !('status' in data)
  ) {
    throw new Error(`${data} is not from database`)
  }
}

function assertStateDataRecords<T extends DataName>(
  records: unknown
): asserts records is DataRecord<T>[] {
  if (!records || !Array.isArray(records)) {
    throw new Error(`${records} is not data records`)
  }
}

function createDataSelector<T extends DataName>(name: T): DataSelector<T> {
  return (state) => {
    const stateData = state[name]
    assertStateData<T>(stateData)
    return stateData
  }
}

function createRecordsSelector<T extends DataName>(
  dataSelector: DataSelector<T>
): RecordsSelector<T> {
  return createSelector(dataSelector, ({ records, status }) => {
    const stateDataRecords = status === 'updated' ? records : []
    assertStateDataRecords<T>(stateDataRecords)
    return stateDataRecords
  })
}

function createDataSelectors<T extends DataName>(
  name: T
): [DataSelector<T>, RecordsSelector<T>] {
  const dataSelector = createDataSelector(name)
  const recordsSelector = createRecordsSelector(dataSelector)
  return [dataSelector, recordsSelector]
}

function createIdRecordMapSelector<T extends DataName>(
  recordsSelector: RecordsSelector<T>
): IdRecordMapSelector<T> {
  return (state) => {
    const records = recordsSelector(state)
    return new Map(records.map((record) => [record.id, record]))
  }
}

export const [selectBankAccountData, selectBankAccounts] =
  createDataSelectors('bankAccount')

export const [selectBillingMethodData, selectBillingMethods] =
  createDataSelectors('billingMethod')

export const [selectPersonData, selectPersons] = createDataSelectors('person')

export const [selectPurchaseHistoryData, selectPurchaseHistories] =
  createDataSelectors('purchaseHistory')

export const [selectUsecaseData, selectUsecases] =
  createDataSelectors('usecase')

const selectAllDataStatuses = createSelector(
  [
    selectBankAccountData,
    selectBillingMethodData,
    selectPersonData,
    selectPurchaseHistoryData,
    selectUsecaseData,
  ],
  (...datas) => [...datas].map(({ status }) => status)
)

export const isSomeDataUpdating = (): boolean =>
  selectAllDataStatuses(store.getState()).some((status) => status !== 'updated')

export const selectBankAccountMap =
  createIdRecordMapSelector(selectBankAccounts)

export const selectBillingMethodMap =
  createIdRecordMapSelector(selectBillingMethods)

export const selectPersonMap = createIdRecordMapSelector(selectPersons)

export const selectUsecaseMap = createIdRecordMapSelector(selectUsecases)
