import { fetchPurchaseHistories, postPurchaseHistory } from './api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createDataBaseSlice } from '@/util/state/asyncData'

export const updatePurchaseHistories = createAsyncThunk(
  'purchaseHistory/fetch',
  fetchPurchaseHistories
)

export const registerPurchaseHistory = createAsyncThunk(
  'purchaseHistory/register',
  postPurchaseHistory
)

export const purchaseSlice = createDataBaseSlice(
  'purchaseHistory',
  updatePurchaseHistories,
  registerPurchaseHistory
)
