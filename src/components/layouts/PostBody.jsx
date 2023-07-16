import React from 'react'
import styles from '@/styles/layouts/postBody.module.scss'

export default function PostBody({children}) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
