import '@/styles/globals.css'
import Base from '@/components/Base'

/* fontAwesome */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  // console.log('MyApp.js: ', pageProps)

  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}
