import React from 'react'
import { styled } from 'design-system'

const Body = styled('div', {
  display: 'flex',
  height: '100%',
  padding: 12,
})

type Props = {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <Body>
      {children}
    </Body>
  )
}

export default PageLayout
