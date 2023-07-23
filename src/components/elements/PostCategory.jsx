import React from 'react'
import styles from '@/styles/elements/postCategory.module.css'
import Link from 'next/link'

export default function PostCategory({ categories }) {
  return (
    <ul className={styles.list}>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}
