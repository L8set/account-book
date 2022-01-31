import { CircularProgress, Modal } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'

type Props = {
  open: boolean
}

export const LoadingModal: FC<Props> = (props) => {
  return (
    <Modal open={props.open}>
      <Box>
        <CircularProgress />
      </Box>
    </Modal>
  )
}
