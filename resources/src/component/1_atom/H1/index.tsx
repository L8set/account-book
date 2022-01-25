import { Typography } from '@mui/material'
import { FC } from 'react'

interface IH1Props {
  title: string
}

export const H1: FC<IH1Props> = (props) => (
  <Typography variant="h1" component="h1">
    {props.title}
  </Typography>
)
