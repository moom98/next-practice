import React from 'react'
import Container from '@/components/layouts/Container'
import Logo from '@/components/elements/Logo'
import Nav from '@/components/elements/Nav'
import styles from '@/styles/layouts/header.module.css'

export default function Header() {
  return (
  <header>
    <Container large>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </Container>
  </header>
  )
}
