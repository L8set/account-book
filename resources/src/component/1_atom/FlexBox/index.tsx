import { Box } from '@mui/material'
import { FC } from 'react'

export const FlexBox: FC = (props) => (
  <Box sx={{ display: 'flex', flexGrow: 0 }}>{props.children}</Box>
)
