import styled, { css } from 'styled-components'

import { PositionValues } from '.'

interface StyledPositionProps {
  position: PositionValues
}

export const StyledPosition = styled.div<StyledPositionProps>`
  position: absolute;

  ${({ position }) => {
    switch (position) {
      case 'bottom-left':
        return css`
          bottom: 1px;
          left: 3px;
        `
      case 'bottom-right':
        return css`
          bottom: 1px;
          right: 3px;
        `
      case 'top-left':
        return css`
          top: 1px;
          left: 3px;
        `
      case 'top-right':
      default:
        return css`
          top: 1px;
          right: 3px;
        `
    }
  }};
`
