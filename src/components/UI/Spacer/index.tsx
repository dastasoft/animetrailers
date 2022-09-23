import { StyledSpacer } from './StyledSpacer'

type SpacerProps = {
  spacing?: number
  direction?: 'row' | 'column'
}

export default function Spacer({
  spacing = 0,
  direction = 'row',
}: SpacerProps) {
  return <StyledSpacer spacing={spacing} direction={direction} />
}
