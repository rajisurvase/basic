import LayoutComponent from '@/layout/LayoutComponent'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <LayoutComponent> 
    <Component {...pageProps} />
  </LayoutComponent>
 
  )
}
