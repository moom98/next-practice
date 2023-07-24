import React from 'react'
// import { client } from 'libs/client'
import { getPostBySlug, getAllPosts } from 'libs/api'
import { prevNextPost } from 'libs/prevNextPost'
import Container from '@/components/layouts/Container'
import PostHeader from '@/components/elements/PostHeader'
import PostBody from '@/components/layouts/PostBody'
import { TwoColumn } from '@/components/layouts/TwoColumn'
import ConvertBody from '@/components/features/convert-body'
import PostCategory from '@/components/elements/PostCategory'
import { extractText } from '@/components/features/extract-text'
// import Meta from '@/components/Meta'
import Pagination from '@/components/elements/Pagination'
import Image from 'next/legacy/image'
// import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchlocal } from 'libs/constants'

export default function Post({
  title,
  publish,
  content,
  categories,
  description,
  eyecatch,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      {/* <Meta
        pgeTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      /> */}
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

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  } else {
    const { title, publishedAt: publish, content, categories } = post

    const description = extractText(content)
    const eyecatch = post.eyecatch ?? eyecatchlocal

    // const { base64 } = await getPlaiceholder(eyecatch.url)
    // eyecatch.blurDataURL = base64

    const allPosts = await getAllPosts()
    const [prevPost, nextPost] = prevNextPost(allPosts, slug)

    return {
      props: {
        title,
        publish,
        content,
        categories,
        description,
        eyecatch,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts()

//   return allPosts.map(({ post }) => {
//     return {
//       params: {
//         slug: post,
//       },
//     }
//   })
// }

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts()

//   return allPosts.map(({ post }) => {
//     return {
//       params: {
//         slug: post,
//       },
//     }
//   })
// }
