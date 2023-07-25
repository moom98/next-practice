import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Script from 'next/script'
import * as gtag from 'libs/gtag'

/* fontAwesome */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  // Google Analytics
  // ページ遷移に応じてGoogle Analytics にページビューを送信する
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dengerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
