import Header from '@/components/base/header'
import Footer from '@/components/base/footer'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
