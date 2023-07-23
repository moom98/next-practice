import React from 'react'
// import { client } from 'libs/client'
import { getPostBySlug } from 'libs/api'
import Container from 'components/layouts/Container'

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}

// export async function getStaticProps() {
//   const resPromise = client.get({
//     endpoint: 'blogs',
//     // contentId: 'schedule',
//   })
//   // then.catchを使う場合
//   // resPromise.then((res) => console.log(res)).catch((err) => console.log(err))

//   // try.catchを使う場合
//   try {
//     const res = await resPromise
//     console.log(res)
//   } catch (err) {
//     console.log(err)
//   }

//   console.log('処理1')
//   setTimeout(() => console.log('処理2'), 1000)
//   console.log('処理3')
//   return {
//     props: {
//       title: '記事のタイトル',
//       date: '2020-01-01',
//     },
//   }
// }
