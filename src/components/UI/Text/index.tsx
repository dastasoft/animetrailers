import React from 'react'

import styles from './Text.module.css'

type TextOwnProps<E extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'base' | 'primary' | 'secondary'
  children: React.ReactNode
  as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export default function Text<E extends React.ElementType = 'div'>({
  size = 'md',
  variant = 'base',
  children,
  as,
}: TextProps<E>) {
  const Component = as ?? 'div'

  return (
    <Component className={`${styles[size]} ${styles[variant]}`}>
      {children}
    </Component>
  )
}
