import React from 'react'
import Logo from '@/components/elements/Logo'
import Nav from '@/components/elements/Nav'
import styles from '@/styles/base/header.module.css'

export default function Header() {
  return (
  <header>
    <div className={styles.flexContainer}>
      <Logo boxOn />
      <Nav />
    </div>
  </header>
  )
}
