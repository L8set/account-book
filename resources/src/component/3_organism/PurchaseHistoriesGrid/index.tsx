import { FC } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { formatDateToYyyyMMdd } from '@/util/format/date'
import {
  selectBillingMethodMap,
  selectPurchaseHistories,
  selectUsecaseMap,
} from '@/selector'
import { formatNumberToCurrency } from '@/util/format/number'
import { Box } from '@mui/system'
import { createSelector } from '@reduxjs/toolkit'
import { CONSTANTS } from '@/constant'
import { useAppSelector } from '@/app/hooks'

type PurchaseHistoryGridRowData = {
  id: number
  purchaseDate: string
  usecase: string
  storeName: string
  itemName: string
  billingMethod: string
  price: string
}

const columns: GridColDef[] = [
  { field: 'purchaseDate', headerName: '購入日' },
  { field: 'usecase', headerName: '用途' },
  { field: 'storeName', headerName: '店名' },
  { field: 'itemName', headerName: '品名' },
  { field: 'billingMethod', headerName: '支払方法' },
  { field: 'price', headerName: '金額' },
]

const selectRows = createSelector(
  [selectPurchaseHistories, selectBillingMethodMap, selectUsecaseMap],
  (
    purchaseHistories,
    billingMethodMap,
    usecaseMap
  ): PurchaseHistoryGridRowData[] =>
    purchaseHistories.map((history) => ({
      id: history.id,
      purchaseDate: formatDateToYyyyMMdd(new Date(history.purchaseDate)),
      usecase:
        usecaseMap.get(history.usecaseId)?.usecase ?? CONSTANTS.NO_RECORD,
      storeName: history.storeName,
      itemName: history.itemName,
      billingMethod:
        billingMethodMap.get(history.billingMethodId)?.method ??
        CONSTANTS.NO_RECORD,
      price: formatNumberToCurrency(history.price),
    }))
)

export const PurchaseHistoriesGrid: FC = () => {
  const rows = useAppSelector(selectRows)

  return (
    <Box height={300}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  )
}
