import { IDataBaseState } from '@/type/api'
import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createSlice,
  Draft,
} from '@reduxjs/toolkit'

function createDataBaseInitialState<
  RecordData extends object
>(): IDataBaseState<RecordData> {
  return {
    records: [],
    status: 'initial',
  }
}

function setStatusAsUpdating<State extends IDataBaseState>(
  state: Draft<State>
): void {
  state.status = 'updating'
}

function setStatusAsUpdated<State extends IDataBaseState>(
  state: Draft<State>
): void {
  state.status = 'updated'
}

function addUpdateCaseToBuilder<
  RecordData extends object,
  State extends IDataBaseState = IDataBaseState<RecordData>
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
  RecordData extends object,
  RegisterData extends object,
  State extends IDataBaseState = IDataBaseState<RecordData>
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
  RecordData extends object,
  RegisterData extends object
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
