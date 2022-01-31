import { IDataRecord, IDataState, PickRequestParams } from '@/type/api'
import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createSlice,
  Draft,
} from '@reduxjs/toolkit'

function createDataBaseInitialState<
  RecordData extends IDataRecord
>(): IDataState<RecordData> {
  return {
    records: [],
    status: 'initial',
  }
}

function setStatusAsUpdating<State extends IDataState>(
  state: Draft<State>
): void {
  state.status = 'updating'
}

function setStatusAsUpdated<State extends IDataState>(
  state: Draft<State>
): void {
  state.status = 'updated'
}

function addUpdateCaseToBuilder<
  RecordData extends IDataRecord,
  State extends IDataState = IDataState<RecordData>
>(
  builder: ActionReducerMapBuilder<State>,
  updateAsyncThunk: AsyncThunk<RecordData[], void, {}>
): void {
  builder
    .addCase(updateAsyncThunk.pending, (state) => setStatusAsUpdating(state))
    .addCase(updateAsyncThunk.fulfilled, (state, action) => {
      setStatusAsUpdated(state)
      state.records = action.payload
    })
}

function addRegistrationCaseToBuilder<
  RecordData extends IDataRecord,
  RegisterData extends PickRequestParams<RecordData>,
  State extends IDataState = IDataState<RecordData>
>(
  builder: ActionReducerMapBuilder<State>,
  registerAsyncThunk: AsyncThunk<RecordData, RegisterData, {}>
): void {
  builder
    .addCase(registerAsyncThunk.pending, (state) => setStatusAsUpdating(state))
    .addCase(registerAsyncThunk.fulfilled, (state, action) => {
      setStatusAsUpdated(state)
      state.records.push(action.payload)
    })
}

export const createDataBaseSlice = <
  RecordData extends IDataRecord,
  RegisterData extends PickRequestParams<RecordData>
>(
  name: string,
  updateAsyncThunk: AsyncThunk<RecordData[], void, {}>,
  registerAsyncThunk: AsyncThunk<RecordData, RegisterData, {}>
) =>
  createSlice({
    name,
    initialState: createDataBaseInitialState<RecordData>(),
    reducers: {},
    extraReducers: (builder) => {
      addUpdateCaseToBuilder(builder, updateAsyncThunk)
      addRegistrationCaseToBuilder(builder, registerAsyncThunk)
    },
  })
