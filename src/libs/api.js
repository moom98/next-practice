import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

// 指定したスラッグの記事を取得する
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }, // microCMSのフィルター機能を使ってスラッグを指定
    })
    return post.contents[0]
  } catch (error) {
    console.log('~~ getPostBySlug ~~')
    console.log(error)
  }
}

// すべての記事を取得する
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishedAt', limit: limit },
    })
    return posts.contents
  } catch (error) {
    console.log('~~ getAllPosts ~~')
    console.log(error)
  }
}
