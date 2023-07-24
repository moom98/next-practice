import React from 'react'
// import { client } from 'libs/client'
import { getPostBySlug, getAllPosts } from 'libs/api'
import Container from '@/components/layouts/Container'
import PostHeader from '@/components/elements/PostHeader'
import PostBody from '@/components/layouts/PostBody'
import { TwoColumn } from '@/components/layouts/TwoColumn'
import ConvertBody from '@/components/features/convert-body'
import PostCategory from '@/components/elements/PostCategory'
import { extractText } from '@/components/features/extract-text'
import Meta from '@/components/Meta'
import Image from 'next/legacy/image'
// import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchlocal } from 'libs/constants'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
}) {
  return (
    <Container>
      <Meta
        pgeTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subTitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            // placeholder="blur"
            // blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumn.Main>
          <TwoColumn.Sidebar>
            <PostCategory categories={categories} />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllPosts()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchlocal

  // const { base64 } = await getPlaiceholder(eyecatch.url)
  // eyecatch.blurDataURL = base64

  return {
    props: {
      title: post.title,
      publish: post.publishedAt,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}
