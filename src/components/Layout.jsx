import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default function Base({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
