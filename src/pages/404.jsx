import React from 'react'
import Meta from '@/components/Meta'
import Container from '@/components/layouts/Container'
import Hero from '@/components/elements/Hero'

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404" pageDesc="404 page not found" />
      <Hero title="404" subTitle="ページが見つかりません" />
    </Container>
  )
}
