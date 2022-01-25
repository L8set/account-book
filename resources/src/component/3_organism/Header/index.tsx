import { FC } from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import { FlexBox } from '@component/atom/FlexBox'
import { MenuButton } from '@component/molecule/MenuButton'

export const Header: FC = () => (
  <AppBar position="sticky">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <FlexBox>
          <MenuButton to="/histories" label="購入履歴" />
          <MenuButton to="/registration" label="登録" />
        </FlexBox>
      </Toolbar>
    </Container>
  </AppBar>
)
