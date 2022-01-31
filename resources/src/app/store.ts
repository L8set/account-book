import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { purchaseHistorySlice } from '@/slice/purchaseHistory'
import { bankAccountSlice } from '@/slice/bankAccount'
import { billingMethodSlice } from '@/slice/billingMethod'
import { personSlice } from '@/slice/person'
import { usecaseSlice } from '@/slice/usecase'

export const store = configureStore({
  reducer: {
    bankAccount: bankAccountSlice.reducer,
    billingMethod: billingMethodSlice.reducer,
    person: personSlice.reducer,
    purchaseHistory: purchaseHistorySlice.reducer,
    usecase: usecaseSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
