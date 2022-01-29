import { createDataBaseSlice } from '@/util/state/asyncData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsecases, postUsecase } from './api'

export const updateUsecases = createAsyncThunk('usecase/fetch', fetchUsecases)

export const registerUsecase = createAsyncThunk('usecase/register', postUsecase)

export const usecaseSlice = createDataBaseSlice(
  'usecase',
  updateUsecases,
  registerUsecase
)
