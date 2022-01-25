import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { purchaseSlice } from '@/slice/purchase'

export const store = configureStore({
  reducer: {
    purchase: purchaseSlice.reducer,
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
