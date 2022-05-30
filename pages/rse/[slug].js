import { items_card } from '@/data/homepage'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import EventCard from '@/components/eventos/EventCard'
import EventSmallCard from '@/components/eventos/EventSmallCard'
import { getRseEventDetails } from 'queries/queries'
import { getRseEvents } from 'queries/queries'
import { useRouter } from 'next/router'
import MarkdownView from 'react-showdown'

import React, { useState } from 'react'

import FsLightbox from 'fslightbox-react'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['queryEventDetails', context.locale, context.params.slug],
    async () => getRseEventDetails(context.locale, context.params.slug)
  )

  await queryClient.prefetchQuery(['queryEvents', context.locale], async () =>
    getRseEvents(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function eventDetails({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { data: eventDetails, isSuccess, isLoading } = useQuery(
    ['queryEventDetails', router.locale, router.query.slug],
    async () => getRseEventDetails(router.locale, router.query.slug)
  )
  const { data: events, isSuccess2, isLoading2 } = useQuery(
    ['queryEvents', router.locale],
    async () => getRseEvents(router.locale)
  )
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
  const title = eventDetails.data[0].attributes.title
  const slug = eventDetails.data[0].attributes.slug
  const description = eventDetails.data[0].attributes.description
  const main_image = eventDetails.data[0].attributes.main_image.data.attributes.url
  const gallery = eventDetails.data[0].attributes.gallery.data
  const lightboxImages = gallery.map((image) => assetsUrl + image.attributes.url)

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  return (
    <>
      {/*DETALLE EVENTO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
                viewport={{ margin: '-100px' }}
              >
                <div className="">
                  <a href="../" className="hover:text-pink-700 font-bold">
                    Inicio
                  </a>{' '}
                  /{' '}
                  <a href="./" className="hover:text-pink-700 font-bold">
                    RSE{' '}
                  </a>
                  / {title}
                </div>
                <div className="flex flex-row font-extrabold text-6xl mb-10">
                  <div className="text-pink-700 ">{title}</div>
                </div>
              </motion.div>
              <div>
                <img className="object-cover w-full h-96 mb-10" src={`${assetsUrl}${main_image}`} />
              </div>

              <div className="text-xl">
                <MarkdownView
                  markdown={description}
                  options={{ tables: true, emoji: true }}
                  className="space-y-5"
                />
              </div>
              <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={lightboxImages}
              />
              <div className="grid grid-cols-4 pt-10 gap-10 ">
                {isSuccess &&
                  lightboxImages.map((image, index) => (
                    <div className="puntero" data-cursortext="Ampliar">
                      <img
                        onClick={() => openLightboxOnSlide(index + 1)}
                        className="object-cover  w-full h-40 mb-10 cursor-pointer border-4 border-gris_claro transition duration-300 hover:border-rosa"
                        src={`${image}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="ml-20 pl-20 border-l-[1px] border-l-gris_claro">
              <div className="pt-20 pb-10 text-xl font-black text-azul">
                OTRAS NOTICIAS DE RESPONSABILIDAD SOCIAL
              </div>
              <div className="">
                {isSuccess &&
                  events.data.map((event) => (
                    <EventSmallCard
                      title={event.attributes.title}
                      date={event.attributes.date}
                      description={event.attributes.description}
                      main_image={event.attributes.main_image.data.attributes.url}
                      slug={event.attributes.slug}
                      path="rse"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
    </>
  )
}
