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
import { useEffect, useState } from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'
import FloatingWhatsApp from 'react-floating-whatsapp'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.push(router.asPath, router.asPath, { locale: 'es' })
  }, [])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div>
        <video playsInline autoPlay muted loop width="400">
          <source src="/static/images/loader-sigmacorp.webm" type="video/webm" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
            position: relative;
          }

          div#__next > div > video {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
        `}</style>
        <div className="z-20 w-screen h-screen bg-white flex justify-center items-center">
          <div class="w-48 h-48 border-b-2 border-rosa rounded-full animate-spin"></div>
        </div>
      </div>
    )
  } else {
    return (
      <ThemeProvider attribute="class">
        <ParallaxProvider>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <Analytics />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
          <FloatingWhatsApp
            phoneNumber="59177938700"
            accountName="Soporte Sigmacorp"
            avatar={'static/images/profile-logo.jpg'}
            statusMessage="Responde en una hora aprox."
            chatMessage="Hola! 👋👩‍🔬. ¿Como podemos ayudarte?"
            placeholder="Escribe un mensaje..."
            notification={false}
            notificationSound={true}
            notificationDelay={30000}
          />
          <RSS />
        </ParallaxProvider>
      </ThemeProvider>
    )
  }
}
export default wrapper.withRedux(withReduxSaga(App))
