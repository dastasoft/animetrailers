import React from 'react'

import { StyledPosition } from './StyledPosition'

type VPosition = 'top' | 'bottom'
type HPositon = 'left' | 'right'

export type PositionValues = `${VPosition}-${HPositon}`

interface PositionProps {
  children: React.ReactNode
  position?: PositionValues
}

export default function Position({
  children,
  position = 'top-right',
}: PositionProps) {
  return <StyledPosition position={position}>{children}</StyledPosition>
}
