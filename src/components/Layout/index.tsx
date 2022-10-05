import React from 'react'

import { Container } from './Container'
import Footer from './Footer'
import Header from './Header'
import { Main } from './Main'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
