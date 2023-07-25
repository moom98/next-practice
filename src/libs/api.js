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

// すべての記事のスラッグを取得する
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishedAt', limit: limit },
    })
    return slugs.contents
  } catch (error) {
    console.log('~~ getSlugs ~~')
    console.log(error)
  }
}

// 記事一覧を取得する
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-publishedAt',
        limit: limit,
      },
    })
    // posts.contents.forEach((post) => {
    //   console.log('eyecatch:', post.eyecatch)
    // })
    return posts.contents
  } catch (error) {
    console.log('~~ getAllPosts ~~')
    console.log(error)
  }
}

// カテゴリごとの一覧を取得する
export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    return categories.contents
  } catch (error) {
    console.log('~~ getAllCategories ~~')
    console.log(error)
  }
}

// 指定したカテゴリに属する記事一覧を取得する
export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        // microCMSのフィルター機能を使ってカテゴリを指定
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishedAt',
        limit: limit,
      },
    })
    return posts.contents
  } catch (error) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(error)
  }
}
