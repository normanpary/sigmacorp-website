import { items_card } from '@/data/homepage'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import EventCard from '@/components/eventos/EventCard'
import { getNews} from 'queries/queries'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['queryEvents', context.locale], async () =>
      getNews(context.locale)
    )
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }

export default function Contacto({ posts, locale, availableLocales }) {
    const { t } = useTranslation()
    const router = useRouter()
    const { data: events, isSuccess, isLoading } = useQuery(
    ['queryEvents', router.locale],
    async () => getNews(router.locale)
  )
  return (
    <>
      {/**BANNER */}
      <div className="bg-[url('/static/images/about/fondo.png')] bg-cover bg-center h-96">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-96">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-24">
              <div className=" lg:flex lg:flex-row font-extrabold text-6xl">
                <div className="text-pink-700 ">{t('news:sigmacorp_titulo')}&nbsp;</div>
                <div className="text-violeta">{t('news:noticias_titulo')}</div>
              </div>
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                {t('about:inicio')}
                </a>{' '}
                / {t('news:noticias')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14 px-5">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div></div>
          </motion.div>
          <div className="container relative mb-10 mx-auto  grid grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-5 ">
          {isSuccess &&
              events.data.map((event) => (
                <EventCard
                  title={event.attributes.title}
                  date={event.attributes.date}
                  description={event.attributes.description}
                  main_image={event.attributes.main_image.data.attributes.url}
                  slug={event.attributes.slug}
                  path="noticias"
                />
              ))}
      
          </div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      
     
    </>
  )
}
