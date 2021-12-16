import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import RSS from '@/components/Rss'

//code wil
import wrapper from '../redux/store'
import withReduxSaga from 'next-redux-saga'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.push(router.asPath, router.asPath, { locale: 'es' })
  }, [])

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>

      <RSS />
    </ThemeProvider>
  )
}
export default wrapper.withRedux(withReduxSaga(App))
