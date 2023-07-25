import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/elements/nav.module.css'

export default function Nav() {
  // nav open/close
  const [navIsOpen, setNavIsOpen] = useState(false)
  // prevがtrueならfalseを返す、falseならtrueを返す
  const toggleNav = () => setNavIsOpen((prev) => !prev)
  const closeNav = () => setNavIsOpen(false)

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {/* navが開いているときにbodyを固定する */}
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 768px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.button} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
