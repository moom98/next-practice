import '@/styles/globals.css'
import Layout from '@/components/Layout'

/* fontAwesome */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  // console.log('MyApp.js: ', pageProps)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
