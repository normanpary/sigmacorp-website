import { items_card } from '@/data/homepage'
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
import { blue, red } from 'tailwindcss/colors'
import FsLightbox from 'fslightbox-react'
import { getNews} from 'queries/queries'
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
    <div className='overflow-hidden'>
      

      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
           
           {locale== "es" &&
           <FsLightbox
        openOnMount={true} 
        sources = {[`https://www.youtube.com/watch?v=tDLOFR5P1jQ`]}
        
        showThumbsOnMount={true}
        
      />
           }
      <Carousel className="z-0" />

      {/** 
      <div className="p-6 flex justify-center">
        <Fade right>
          <div className="grid grid-cols-2 gap-4 md:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row  lg:-mt-40">
            {items_card.map((item, index) => (
              <ItemCard item={item} key={index} index={index} />
            ))}
          </div>
        </Fade>
      </div>
      */}


 

      {/**CAJAS VALORES */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        viewport={{ margin: '-100px' }}
      >
        <div className="container relative mb-10 mx-auto max-w-[95%]  lg:max-w-[80%] xl:max-w-[60%] grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 -mt-20 lg:-mt-32 z-10 ">
          <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-2 lg:px-10  py-3 lg:py-8 rounded-xl flex flex-col items-center">
            <div className=" min-h-[70px] lg:min-h-[80px] flex flex-col-reverse">
              <img
                className="scale-75 lg:scale-100"
                src={'static/images/home/innovacion.png'}
              />
            </div>
            <div className="text-center font-black text-xl uppercase pt-4">{t('home:innovacion')}</div>
            <div className="text-center pt-4 text-sm">
            {t('home:innovacion_text')}
            </div>
          </div>

          <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-2 lg:px-10  py-3 lg:py-8 rounded-xl flex flex-col items-center">
            <div className="min-h-[70px] lg:min-h-[80px] flex flex-col-reverse">
              <img className="scale-75 lg:scale-100" src={'static/images/home/crecimiento.png'} />
            </div>
            <div className="text-center font-black text-xl uppercase pt-4">{t('home:crecimiento')}</div>
            <div className="text-center pt-4 text-sm">
            {t('home:crecimiento_text')}
            </div>
          </div>

          <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-2 lg:px-10  py-3 lg:py-8 rounded-xl flex flex-col items-center">
            <div className="min-h-[70px] lg:min-h-[80px] flex flex-col-reverse">
              <img  className="scale-75 lg:scale-100" src={'static/images/home/desarrollo.png'} />
            </div>
            <div className="text-center font-black text-xl uppercase pt-4">{t('home:desarrollo')}</div>
            <div className="text-center pt-4 text-sm">
            {t('home:desarrollo_text')}
            </div>
          </div>

          <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-2 lg:px-10  py-3 lg:py-8 rounded-xl flex flex-col items-center">
            <div className="min-h-[70px] lg:min-h-[80px] flex flex-col-reverse">
              <img  className="scale-75 lg:scale-100" src={'static/images/home/proyeccion.png'} />
            </div>
            <div className="text-center font-black text-xl uppercase pt-4">{t('home:proyeccion')}</div>
            <div className="text-center pt-4 text-sm">
            {t('home:proyeccion_text')}
            </div>
          </div>
        </div>
      </motion.div>
      {/**FIN CAJAS VALORES */}

      {/**QUIENES SOMOS */}
      <div className="bg-fondo_reverse bg-no-repeat bg-right-top mt-20 puntero" data-cursortext="<div class='cursor-icono'>+</div>" >
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
                {t('home:laboratorio')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
                {t('home:sigma')}
              </p>
              <p className="text-lg font-bold pb-4">{t('home:ofrecemos_text')}</p>
              <p className="text-lg text-gray-600 pb-8">{t('home:proporcionar_text')}</p>
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
                <img className="lg:w-2/3" src="/static/images/home/children.png" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '150px' }}
            >
              <div className="flex w-full -mt-40 lg:w-60 lg:absolute lg:bottom-40 lg:left-0 text-lg">
                <ItemProposito />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/**CSR */}
      <div className="bg-gray-200 bg-fondo bg-no-repeat bg-left-top">
        <div className=" container mx-auto p-10 pt-20 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <p className="font-extrabold text-gray-500 text-center text-lg">
                {t('home:nuestro_blog')}
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
                {t('home:responsabilidad')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                {t('home:social')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <input
              className="bg-violeta text-white text-xs rounded-full py-1 px-4 mt-8 ml-8 mb-2"
              type="button"
              value={t('home:ver_blog')}
            />
          </motion.div>
          <div className="lg:p-4 sm:p-8 justify-center">
            {/**<BlogCarousel posts={posts} />*/}

            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="container relative mb-10 mx-auto  grid lg:grid-cols-3 gap-10 lg:gap-24 ">
                <div className="transition hover:-translate-y-3 hover:shadow-lg">
                  <div className="h-auto  bg-white  rounded-md">
                    <div className="">
                      <img
                        className="object-cover h-48 w-full rounded-t-md"
                        src={'static/images/home/noticia1.png'}
                        alt="Carousel"
                      />
                    </div>
                    <div className="relative p-4 w-auto h-54">
                      <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white font-bold  -mt-7">
                      {t('home:new01_date')}
                      </span>
                      <p className="mt-5 capitalize line-clamp-2 text-xl font-black">
                      {t('home:new01')}
                      </p>
                      <p className="text-gray-500 text-base line-clamp-3 mt-2">
                      {t('home:new01_text')}
                      </p>
                      <p className="pb-0 pt-4 text-base underline font-bold text-blue-800 mb-4">
                        {t('home:leer_mas')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="transition hover:-translate-y-3 hover:shadow-lg">
                  <div className="h-auto  bg-white  rounded-md">
                    <div className="">
                      <img
                        className="object-cover h-48 w-full rounded-t-md"
                        src={'static/images/home/noticia2.jpg'}
                        alt="Carousel"
                      />
                    </div>
                    <div className="relative p-4 w-auto h-54">
                      <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white font-bold -mt-7">
                      {t('home:new02_date')}
                      </span>
                      <p className="h-16 mt-5 capitalize line-clamp-2 text-xl font-black">
                      {t('home:new02')}
                      </p>
                      <p className="h-16 text-gray-500 text-base line-clamp-3 mt-2">
                      {t('home:new02_text')}
                      </p>
                      <p className="pb-0 pt-4 text-base underline font-bold text-blue-800 mb-4">
                        {t('home:leer_mas')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="transition hover:-translate-y-3 hover:shadow-lg">
                  <div className="h-auto  bg-white  rounded-md">
                    <div className="">
                      <img
                        className="object-cover h-48 w-full rounded-t-md"
                        src={'static/images/home/noticia3.jpg'}
                        alt="Carousel"
                      />
                    </div>
                    <div className="relative p-4 w-auto h-54">
                      <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white font-bold  -mt-7">
                      {t('home:new01_date')}
                      </span>
                      <p className="mt-5 capitalize line-clamp-2 text-xl font-black">
                      {t('home:new03')}
                      </p>
                      <p className="text-gray-500 text-base line-clamp-3 mt-2">
                      {t('home:new03_text')}
                      </p>
                      <p className="pb-0 pt-4 text-base underline font-bold text-blue-800 mb-4">
                        {t('home:leer_mas')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/**NEWS */}
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
                {t('home:nuestras_noticias')}
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
                {t('home:sigma_titulo_noticias')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                {t('home:noticias')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <Link href={"./noticias"} aria-label={`Link to News`}>
            <a >
           <div
              className="hover:bg-rosa bg-violeta text-white text-xs rounded-full py-1 px-4 mt-8 ml-8 mb-2 inline-block"
              
            >{t('home:ver_noticias')}
              </div>
              </a>
            </Link>
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
      </div>
      {/*FIN NOTICIAS*/}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

