import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  position: relative;
  padding-bottom: 56.1%;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
