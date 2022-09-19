import React from 'react'

import styles from './Text.module.css'

type HEX_COLOR = `#${string}` | 'inherit'

type TextOwnProps<E extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: HEX_COLOR
  children: React.ReactNode
  as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export default function Text<E extends React.ElementType = 'div'>({
  size = 'md',
  color = 'inherit',
  children,
  as,
}: TextProps<E>) {
  const Component = as || 'div'

  return (
    <Component style={{ color }} className={styles[size]}>
      {children}
    </Component>
  )
}
