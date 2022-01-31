import { createDataBaseSlice } from '@/slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBillingMethods, postBillingMethod } from './api'

export const updateBillingMethods = createAsyncThunk(
  'billingMethod/fetch',
  fetchBillingMethods
)

export const registerBillingMethod = createAsyncThunk(
  'billingMethod/register',
  postBillingMethod
)

export const billingMethodSlice = createDataBaseSlice(
  'billingMethod',
  updateBillingMethods,
  registerBillingMethod
)
