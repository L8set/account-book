import { H1 } from '@/component/1_atom/H1'
import { Container } from '@mui/material'
import { FC, ReactNode } from 'react'

interface PageTemplateProps {
  title: string
  content: ReactNode
}

export const PageTemplate: FC<PageTemplateProps> = (props) => (
  <Container>
    <H1 title={props.title} />
    <div>{props.content}</div>
  </Container>
)
