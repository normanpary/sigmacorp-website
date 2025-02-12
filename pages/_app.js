import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/custom.css' // Importa el archivo CSS personalizado

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import RSS from '@/components/Rss'

import wrapper from '../redux/store'
import withReduxSaga from 'next-redux-saga'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'
import FloatingWhatsApp from 'react-floating-whatsapp'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import Cursor from '../common/cursor';

function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter()
  const getLayout = Component.getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState || {}}>
          <ThemeProvider attribute="class">
            <ParallaxProvider>
              <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
              </Head>
              <Analytics />
              <Cursor />
              <FloatingWhatsApp
                phoneNumber="59167598055"
                accountName="Soporte Sigmacorp"
                avatar={'static/images/profile-logo.jpg'}
                statusMessage="Responde en una hora aprox."
                chatMessage="Hola! 👋👩‍🔬. ¿Como podemos ayudarte?"
                placeholder="Escribe un mensaje..."
                notification={false}
                notificationSound={true}
              />
             {getLayout(<Component {...pageProps} />)}
            </ParallaxProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default wrapper.withRedux(withReduxSaga(App))