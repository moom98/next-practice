import React from 'react'
import Meta from '@/components/meta'
import Hero from '@/components/elements/Hero'
import Container from '@/components/layouts/Container'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="記事一覧" />
      <Hero title="Blog" subTitle="Recent Posts" />
    </Container>
  )
}
