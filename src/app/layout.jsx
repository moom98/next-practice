import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { siteMeta } from 'libs/constants'
const { siteLang } = siteMeta
import Layout from '@/components/Layout'

/* fontAwesome */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang={siteLang}>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
