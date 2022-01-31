import { fetchPurchaseHistories, postPurchaseHistory } from './api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createDataBaseSlice } from '@/slice'

export const updatePurchaseHistories = createAsyncThunk(
  'purchaseHistory/fetch',
  fetchPurchaseHistories
)

export const registerPurchaseHistory = createAsyncThunk(
  'purchaseHistory/register',
  postPurchaseHistory
)

export const purchaseHistorySlice = createDataBaseSlice(
  'purchaseHistory',
  updatePurchaseHistories,
  registerPurchaseHistory
)
