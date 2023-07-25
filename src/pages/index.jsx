import React from 'react'
import { getAllPosts } from 'libs/api'
// import Meta from 'components/Meta'
import Hero from '@/components/elements/Hero'
import Container from '@/components/layouts/Container'
import Posts from '@/components/elements/Posts'
import Pagination from 'components/elements/Pagination'
import { eyecatchlocal } from 'libs/constants'
import Post from './blog/[slug]'

export default function Home({ posts }) {
  return (
    <Container>
      {/* <Meta /> */}
      <Hero
        title="BLOG"
        subTitle="next.js×microCMS×Vercel×Netlifyの練習"
        imageOn
      />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  // topは最新4件のみ取得
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchlocal
    }
  }
  return {
    props: { posts: posts },
  }
}
