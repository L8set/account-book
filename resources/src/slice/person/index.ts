import { createDataBaseSlice } from '@/util/state/asyncData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPersons, postPerson } from './api'

export const updatePersons = createAsyncThunk('person/fetch', fetchPersons)

export const registerPerson = createAsyncThunk('person/register', postPerson)

export const personSlice = createDataBaseSlice(
  'person',
  updatePersons,
  registerPerson
)
