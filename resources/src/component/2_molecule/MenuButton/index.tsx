import { Button } from '@mui/material'
import { FC } from 'react'
import { Link, LinkProps, useNavigate } from 'react-router-dom'

interface MenuButtonProps {
  label: string
  to: LinkProps['to']
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
  const navigate = useNavigate()

  return (
    <Button
      key={props.label}
      sx={{ display: 'block', color: 'white' }}
      onClick={() => navigate(props.to)}
    >
      {props.label}
    </Button>
  )
}
