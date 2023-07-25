import React from 'react'
import { getAllCategories, getAllPostsByCategory } from 'libs/api'
import Container from '@/components/layouts/Container'
import PostHeader from 'components/elements/PostHeader'
import Posts from '@/components/elements/Posts'
import { eyecatchlocal } from 'libs/constants'

export default function Category({ name, posts }) {
  return (
    <Container>
      <PostHeader title={name} subTitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const catSlug = params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchlocal
    }
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  }
}
