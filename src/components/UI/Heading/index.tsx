import React from 'react'

import styles from './Heading.module.css'

type HeadingOwnProps<T extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  variant?: 'base' | 'primary' | 'secondary'
  as?: T | 'h2'
}

type HeadingProps<T extends React.ElementType> = HeadingOwnProps<T> &
  React.ComponentPropsWithoutRef<T>

export default function Heading<T extends React.ElementType = 'h2'>({
  size = 'md',
  children,
  variant = 'base',
  as = 'h2',
}: HeadingProps<T>) {
  const Component = as

  return (
    <Component
      className={`${styles.Heading} ${styles[size]} ${styles[variant]}`}
    >
      {children}
    </Component>
  )
}
