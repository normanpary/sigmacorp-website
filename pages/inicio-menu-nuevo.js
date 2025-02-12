
import siteMetadata from '@/data/siteMetadata'
import ItemCard from '@/components/homepage/ItemCard'
import ItemProposito from '@/components/homepage/ItemProposito'

import useTranslation from 'next-translate/useTranslation'
import { PageSEO } from '@/components/SEO'

import BlogCarousel from '@/components/homepage/BlogCarousel'
import { URL_BLOG_POSTS } from '@/data/api/config'
import axios from 'axios'
import Carousel from '@/components/homepage/Carousel'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
//import { useEffect, useState } from 'react'
import React, { useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { motion } from 'framer-motion'

import { getNews } from 'queries/queries'
import { useRouter } from 'next/router'
import EventCard from '@/components/eventos/EventCard'
import Link from 'next/link'

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

export default function HomePage({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  const [toggler, setToggler] = useState(false)

  const router = useRouter()
  const { data: events, isSuccess, isLoading } = useQuery(
    ['queryEvents', router.locale],
    async () => getNews(router.locale)
  )

  return (
    <div className="overflow-hidden">
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />

{/**BANNER */}
<div className="relative overflow-hidden">
  <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
    <source src="/static/videos/video01.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-white bg-opacity-20"></div> {/* Capa blanca semi-transparente */}
  <div className="relative bg-no-repeat bg-left-top p-10">
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      viewport={{ margin: '0px' }}
    >
      <div className="container mx-auto py-24 p-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] ">
        <div className="lg:flex lg:flex-col font-extrabold text-4xl lg:text-6xl xl:text-6xl py-4 text-center">
          <div className="text-violeta ">{t('home:el_cuidado')}</div>
        </div>
        <div className="text-xl text-center">
          <p>{t('home:la_salud')}</p>
          <Link href={'./noticias'} aria-label={`Link to News`}>
            <a>
            <div className="hover:bg-violeta bg-rosa text-white text-lg lg:text-xl rounded-full py-1 px-4 mt-8 mb-2 px-8 inline-block">
                {t('home:explorar_productos')}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</div>
{/*FIN BANNER*/}


{/**PROMESA DE CALIDAD */}
<div
        className="bg-fondo_reverse bg-no-repeat bg-right-top mt-20 puntero"
        data-cursortext="<div class='cursor-icono'>+</div>"
      >
        <div className=" container mx-auto space-y-6 md:space-y-0  px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="">
              <p className="font-extrabold text-gray-500 pb-4 text-lg">{t('home:promesa')}</p>
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:desarrollo')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
                {t('home:continuo')}
              </p>
              <p className="text-lg font-bold pb-4">{t('home:optimizacion')}</p>
              <p className="text-lg text-gray-600 pb-8">{t('home:cada_producto')}</p>
              <p className="text-lg underline font-black text-violeta">{t('home:leer_mas')}</p>
            </div>
          </motion.div>
          <div className="relative md:col-start-1 md:row-start-1">
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 1.3 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="flex justify-end w-full">
                <img className="rounded-lg" src="/static/images/inicio/promesa.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/**FIN PROMESA DE CALIDAD*/}
      <hr className="container border-1 mx-auto border-rosa my-10" />
{/**INTERNACIONALIZACION */}
<div
  className="bg-fondo_reverse bg-no-repeat bg-right-top mt-20 puntero"
  data-cursortext="<div class='cursor-icono'>+</div>"
>
  <div className="container mx-auto space-y-6 md:space-y-0 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      viewport={{ margin: '-100px' }}
    >
      <div className="">
        <p className="font-extrabold text-gray-500 pb-4 text-lg">{t('home:internacionalizacion')}</p>
        <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
          {t('home:aportando')}
        </p>
        <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
          {t('home:de_bolivia')}
        </p>
        <p className="text-lg font-bold pb-4">{t('home:exportacion')}</p>
        <p className="text-lg text-gray-600 pb-8">{t('home:industria_quimico_farmaceutica')}</p>
        <p className="text-lg underline font-black text-violeta">{t('home:leer_mas')}</p>
      </div>
    </motion.div>
    <div className="relative md:col-start-2 md:row-start-1">
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 1.3 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        viewport={{ margin: '-100px' }}
      >
        <div className="flex justify-end w-full">
          <img className="rounded-lg" src="/static/images/inicio/internacionalizacion.jpg" />
        </div>
      </motion.div>
    </div>
  </div>
</div>
{/**FIN INTERNACIONALIZACION*/}

<hr className="container border-1 mx-auto border-rosa my-10" />
{/**BIENESTAR HUMANO */}
<div
        className="bg-fondo_reverse bg-no-repeat bg-right-top mt-20 puntero"
        data-cursortext="<div class='cursor-icono'>+</div>"
      >
        <div className=" container mx-auto space-y-6 md:space-y-0  px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="">
              <p className="font-extrabold text-gray-500 pb-4 text-lg">{t('home:bienestar_humano')}</p>
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:acciones')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
                {t('home:tangibles')}
              </p>
              <p className="text-lg font-bold pb-4">{t('home:participacion_activa')}</p>
              <p className="text-lg text-gray-600 pb-8">{t('home:cada_accion')}</p>
              <p className="text-lg underline font-black text-violeta">{t('home:leer_mas')}</p>
            </div>
          </motion.div>
          <div className="relative md:col-start-1 md:row-start-1">
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 1.3 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="flex justify-end w-full">
                <img className="rounded-lg" src="/static/images/inicio/promesa.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/**FIN BIENESTAR HUMANO */}
      <hr className="container border-1 mx-auto border-rosa my-10" />

      {/**QUIENES SOMOS */}
      <div
        className="bg-fondo_reverse bg-no-repeat bg-right-top mt-20 puntero"
        data-cursortext="<div class='cursor-icono'>+</div>"
      >
        <div className=" container mx-auto space-y-6 md:space-y-0  px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="">
              <p className="font-extrabold text-gray-500 pb-4 text-lg">{t('home:quienes_somos')}</p>
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:industria_quimico')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
                {t('home:sigma_corp')}
              </p>
              <p className="text-lg font-bold pb-4">{t('home:ofrecemos')}</p>
              <p className="text-lg text-gray-600 pb-8">{t('home:tenemos')}</p>
              <p className="text-lg underline font-black text-violeta">{t('home:leer_mas')}</p>
            </div>
          </motion.div>
          <div className="relative md:col-start-2 md:row-start-1">
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 1.3 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="flex justify-end w-full">
                <img className="rounded-lg" src="/static/images/inicio/sigma-industria.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/**FIN QUIENES SOMOS */}

      {/** NUESTRO PROCESO */}
      <div className="bg-gray-200 bg-fondo bg-no-repeat bg-left-top">
        <div className=" container mx-auto p-10 pt-20 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <p className="font-extrabold text-gray-500 text-center text-lg">{t('home:conoce_como_trabajamos')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="flex justify-center mt-4">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:nuestro_proceso')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                {t('home:tu_salud')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
           </motion.div>
          <div className="lg:p-4 sm:p-8 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="container relative mt-10 mb-10 mx-auto  grid grid-cols-8 gap-4 ">
                <div className="col-span-2  flex flex-col items-center justify-center">
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-14 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-maquila.png" />
                  </div>
                  <Link href={'./noticias'} aria-label={`Link to News`}>
                  <a>
                    <div className="hover:bg-rosa bg-violeta text-white text_lg md:text-xl rounded-full py-1 px-4 mt-8 mb-2 md:px-11 inline-block">
                    {t('home:maquila')}
                    </div>
                  </a>
                </Link>
                </div>
                <div className="flex items-center justify-center h-full">
                  <img className="h-10 mb-20" src="/static/images/inicio/icono-flecha-rosa.png" />
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-14 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-distribucion.png" />
                  </div>
                  <Link href={'./noticias'} aria-label={`Link to News`}>
                  <a>
                    <div className="hover:bg-rosa bg-violeta text-white text_lg md:text-xl rounded-full py-1 px-4 mt-8 mb-2 md:px-11 inline-block">
                    {t('home:distribucion')}
                    </div>
                  </a>
                </Link>
                </div>
                <div className="flex items-center justify-center h-full">
                  <img className="h-10 mb-20" src="/static/images/inicio/icono-flecha-rosa.png" />
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-14 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-ventas.png" />
                  </div>
                  <Link href={'./noticias'} aria-label={`Link to News`}>
                  <a>
                    <div className="hover:bg-rosa bg-violeta text-white text_lg md:text-xl rounded-full py-1 px-4 mt-8 mb-2 md:px-11 inline-block">
                    {t('home:ventas')}
                    </div>
                  </a>
                </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/** FIN NUESTRO PROCESO */}

      {/**TESTIMONIOS Y CERTIFICACIONES */}
      <div className="bg-white bg-fondo bg-no-repeat bg-left-top">
        <div className=" container mx-auto p-10 pt-20 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <p className="font-extrabold text-gray-500 text-center text-lg">
                {t('home:testimonios_y_certificaciones')}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="flex justify-center mt-4">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:lo_que_dicen')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                {t('home:de_nosotros')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
           
          </motion.div>
          <div className="lg:p-4 sm:p-8 justify-center">
            {/**<BlogCarousel posts={posts} />*/}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              {/*NOTICIAS*/}
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
                <div className="flex justify-center">
                <Link href={'./noticias'} aria-label={`Link to News`}>
                  <a>
                    <div className="hover:bg-rosa bg-violeta text-white text-xl rounded-full py-1 px-4 mt-8 ml-8 mb-2 px-11 inline-block">
                    {t('home:ver_mas')}
                    </div>
                  </a>
                </Link>
                </div>
              </div>
              {/*FIN NOTICIAS*/}
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
