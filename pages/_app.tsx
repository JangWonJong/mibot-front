import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Nav from '@/components/Nav'
import { wrapper } from '@/modules/store'
import '@/styles/globals.css'
import { AppProps } from 'next/app'


function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer/>
    </div>
  )
}

export default wrapper.withRedux(App) 
// export default App