import React from 'react'

import { StyledHStack } from './StyledHStack'

interface HStackProps {
  spacing?: number
  children: React.ReactNode
}

export default function HStack({ spacing = 0, children }: HStackProps) {
  return <StyledHStack spacing={spacing}>{children}</StyledHStack>
}
