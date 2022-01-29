import { createDataBaseSlice } from '@/util/state/asyncData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBankAccounts, postBankAccount } from './api'

export const updateBankAccounts = createAsyncThunk(
  'bankAccount/fetch',
  fetchBankAccounts
)

export const registerBankAccount = createAsyncThunk(
  'bankAccount/register',
  postBankAccount
)

export const bankAccountSlice = createDataBaseSlice(
  'bankAccount',
  updateBankAccounts,
  registerBankAccount
)
