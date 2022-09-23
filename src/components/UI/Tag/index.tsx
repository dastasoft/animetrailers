import React from 'react'

import styles from './Tag.module.css'

type TagProps = {
  variant?: 'solid' | 'outlined'
  text: string
} & Omit<React.ComponentProps<'span'>, 'children'>

export default function Tag({
  text,
  variant = 'solid',
  ...otherProps
}: TagProps) {
  return (
    <span className={styles[`Tag-${variant}`]} {...otherProps}>
      {text}
    </span>
  )
}
