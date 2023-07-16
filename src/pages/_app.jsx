import '@/styles/globals.css'
import Base from '@/components/Base'

export default function MyApp({ Component, pageProps }) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}
