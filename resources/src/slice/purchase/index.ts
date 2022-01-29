import {
  fetchPurchaseHistories,
  postPurchaseHistory,
} from '@/api/transaction/purchase'
import { Purchase, PurchaseHistory } from '@/type/transaction/purchase'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

export interface PurchaseState {
  histories: PurchaseHistory[]
  status: 'initial' | 'updating' | 'updated'
}

const initialState: PurchaseState = {
  histories: [],
  status: 'initial',
}

const setAsUpdating = (state: WritableDraft<PurchaseState>): void => {
  state.status = 'updating'
}

const setAsUpdated = (state: WritableDraft<PurchaseState>): void => {
  state.status = 'updated'
}

/** 購入履歴の最新化 */
export const updatePurchaseHistories = createAsyncThunk(
  'purchase/fetchHistories',
  () => fetchPurchaseHistories()
)

/** 購入情報の登録 */
export const registerPurchase = createAsyncThunk(
  'purchase/register',
  (purchase: Purchase) => postPurchaseHistory(purchase)
)

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePurchaseHistories.pending, setAsUpdating)
      .addCase(updatePurchaseHistories.fulfilled, (state, action) => {
        setAsUpdated(state)
        state.histories = action.payload
      })
      .addCase(registerPurchase.pending, setAsUpdating)
      .addCase(registerPurchase.fulfilled, (state, action) => {
        setAsUpdated(state)
        state.histories.push(action.payload)
      })
  },
})
