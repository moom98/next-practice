import React from 'react'
import Social from '@/components/elements/Social'
import styles from '@/styles/elements/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.address</address>
    </div>
  )
}
