import React, { useState, useRef } from 'react'
import styles from '@/styles/elements/accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Accordion({ heading, children }) {
  // アコーディオンの開閉ロジック
  const [textIsOpen, setTextIsOpen] = useState(false)
  const toggleText = () => setTextIsOpen((prev) => !prev)
  const refText = useRef({ scrollHeight: 0 })

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div
        className={styles.text}
        ref={refText}
        style={{
          '--text-height': `${refText.current.scrollHeight}px`,
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
