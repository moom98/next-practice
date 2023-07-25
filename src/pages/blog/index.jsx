import React from 'react'
import Hero from '@/components/elements/Hero'
import Container from '@/components/layouts/Container'
import Posts from '@/components/elements/Posts'
// import Meta from '@/components/meta'
import { getAllPosts } from 'libs/api'

// ローカルの代替アイキャッチ画像
import { eyecatchlocal } from 'libs/constants'

export default function Blog({ posts }) {
  return (
    <Container>
      {/* <Meta pageTitle="Blog" pageDesc="記事一覧" /> */}
      <Hero title="Blog" subTitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchlocal
    }
  }

  return {
    props: { posts: posts },
  }
}
