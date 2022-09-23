import React from 'react'

import styles from './Heading.module.css'

type HEX_COLOR = `#${string}` | 'inherit'

type HeadingOwnProps<E extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: React.ReactNode
  color?: HEX_COLOR
  as?: E
}

type HeadingProps<E extends React.ElementType> = HeadingOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof HeadingOwnProps<E>>

export default function Heading<E extends React.ElementType = 'h2'>({
  size = 'md',
  children,
  color,
  as,
}: HeadingProps<E>) {
  const Component = as || 'h2'

  return (
    <Component style={{ color }} className={styles[size]}>
      {children}
    </Component>
  )
}
