import React from 'react'
import Meta from 'components/Meta'
import Hero from '@/components/elements/Hero'
import Container from '@/components/layouts/Container'

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="BLOG"
        subTitle="next.js×microCMS×Vercel×Netlifyの練習"
        imageOn
      />
    </Container>
  )
}
