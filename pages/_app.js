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
import siteMetadata from '@/data/siteMetadata'
import useTranslation from 'next-translate/useTranslation'

// Título por defecto según la sección (las páginas con PageSEO lo reemplazan)
const sectionTitleKeys = {
  about: 'about',
  nutraceutics: 'nutraceutics',
  pharmaceutics: 'pharmaceutics',
  'pharmaceutics-products': 'pharmaceutics',
  products: 'products',
  bioseguridad: 'biosecurity',
  biosecurity: 'biosecurity',
  maquila: 'maquila',
  noticias: 'news',
  eventos: 'events',
  events: 'events',
  rse: 'csr',
  csr: 'csr',
  contact: 'contact',
  contacto: 'contact',
  farmacovigilancia: 'pharmacovigilance',
}

function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter()
  const { t } = useTranslation()
  const pathSegments = router.pathname.split('/').filter(Boolean)
  const sectionKey =
    sectionTitleKeys[pathSegments[0] === 'recursos' ? pathSegments[1] : pathSegments[0]]
  const defaultTitle = sectionKey
    ? `${t(`headerNavLinks:${sectionKey}`)} | Sigmacorp`
    : siteMetadata.title[router.locale]
  const getLayout = Component.getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState || {}}>
          <ThemeProvider attribute="class">
            <ParallaxProvider>
              <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <title>{defaultTitle}</title>
                <meta name="description" content={siteMetadata.description[router.locale]} />
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
                className='z-50'
                
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