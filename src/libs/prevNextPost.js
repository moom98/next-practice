export function prevNextPost(allSlugs, currentPost) {
  const numberOfSlugs = allSlugs.length

  const index = allSlugs.findIndex(({ slug }) => slug === String(currentPost))

  const prevPost =
    index + 1 === numberOfSlugs ? { title: '', slug: '' } : allSlugs[index + 1]
  // 現在の記事が最後の記事の場合、次の記事は存在しないので空のオブジェクトを返す

  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]
  // 現在の記事が最初の記事の場合、前の記事は存在しないので空のオブジェクトを返す

  return [prevPost, nextPost]
}
