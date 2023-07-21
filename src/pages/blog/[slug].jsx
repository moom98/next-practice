// export async function getServerSideProps({ context }) {
//   console.log('params: ', context.params)
//   return {
//     props: {
//       message: 'Dynamic Routes',
//     },
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'slug-1' } }, { params: { slug: 'slug-2' } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  //   console.log('posts: ', params)
  return {
    props: {
      message: 'Dynamic Routes',
    },
  }
}
