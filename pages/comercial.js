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
  <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/static/images/comercial/comercial01.jpg')" }}></div>
  <div className="absolute inset-0 bg-white bg-opacity-50"></div> {/* Capa blanca semi-transparente */}
  <div className="relative bg-no-repeat bg-left-top p-10">
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      viewport={{ margin: '0px' }}
    >
      <div className="container mx-auto py-40 p-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] ">
        <div className="lg:flex lg:flex-col font-extrabold text-4xl lg:text-6xl xl:text-6xl py-4 text-center">
          <div className="text-rosa ">CONOCE NUESTRA DIVISIÓN COMERCIAL</div>
        </div>
        <div className="text-xl text-center">
          <p>Contamos con el apoyo de 9300 médicos aproximadamente,
para ofrecer un excelente servicio y estar al alcance de cada

persona que necesite nuestra ayuda.</p>
        
        </div>
      </div>
    </motion.div>
  </div>
</div>
{/*FIN BANNER*/}



{/**BOLIVIA */}
<div
  className="bg-fondo_reverse bg-no-repeat bg-right-top py-20 puntero"
  data-cursortext="<div class='cursor-icono'>+</div>"
>
  <div className="container mx-auto space-y-6 md:space-y-0 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      viewport={{ margin: '-100px' }}
    >
      <div className="flex items-center justify-center h-full">
  <p className="text-3xl text-rosa  pb-8">El alcance que tenemos a nivel nacional está superando muchas expectativas en cada departamento.</p>
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
          <img className="rounded-lg" src="/static/images/comercial/comercial02.png" />
        </div>
      </motion.div>
    </div>
  </div>
</div>
{/**FIN BOLIVIA*/}

<hr className="container border-1 mx-auto border-rosa y-10" />
{/**aliados */}
<div
  className="relative bg-cover bg-center bg-no-repeat bg-right-top puntero"
  style={{ backgroundImage: "url('/static/images/comercial/comercial03.jpg')" }}
  data-cursortext="<div class='cursor-icono'>+</div>"
>
  <div className="absolute inset-0 bg-white bg-opacity-50"></div> {/* Capa blanca semi-transparente */}
  <div className="relative container mx-auto space-y-6 md:space-y-0 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28 py-40">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      viewport={{ margin: '-100px' }}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-3xl text-rosa pb-8">Nuestra red de canal completo de distribución está conformado por alrededor de 9500 entre:</p>
      </div>
    </motion.div>
    <div className="relative md:col-start-2 md:row-start-1">
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 1.3 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        viewport={{ margin: '-100px' }}
      >
        <div className="flex flex-col justify-between  h-full">
  <p className="text-4xl font-bold text-violeta py-10"> -> FARMACIAS</p>
  <p className="text-4xl font-bold text-violeta py-10"> -> CLÍNICAS</p>
  <p className="text-4xl font-bold text-violeta py-10"> -> HOSPITALES</p>
</div>
      </motion.div>
    </div>
  </div>
</div>
{/**FIN ALIADOS*/}


      <hr className="container border-1 mx-auto border-rosa " />

    

      {/** NUESTRO PROCESO */}
      <div className="bg-gray-200 bg-fondo bg-no-repeat bg-left-top">
        <div className=" container mx-auto p-20 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <p className="font-extrabold text-gray-500 text-center text-lg">LOGRAMOS EXCELENTES VENTAS</p>
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
                PRODUCTOS 
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
              COMERCIALIZADOS
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center  p-4">
                  <img src="/static/images/comercial/nafazol.jpg" alt="Image 1" className="w-full h-auto rounded-2xl h-62 object-cover" />
                  <h3 className="text-violeta text-2xl font-bold mt-4">NAFAZOL</h3>
                  <p className="text-lg mt-2">Bomberos presentes en los momentos más
criticos del país, el grupo de RESCATE
GEOS, estuvo presente junto a NAFAZOL®
brindando toda la ayuda necesaria.</p>
                </div>
                <div className="flex flex-col items-center p-4">
                <img src="/static/images/comercial/lubricol.jpg" alt="Image 1" className="w-full h-auto rounded-2xl h-62 object-cover" />
                  <h3 className="text-violeta text-2xl font-bold mt-4">LUBRICOL</h3>
                  <p className="text-lg mt-2">Lubricol® siempre está presente en los
momentos más dificiles que atraviesan tus
ojos, es por eso que nosotros brindamos la
ayuda necesaria para poder devolver la
libricacíon que necesitan.</p>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/** FIN NUESTRO PROCESO */}


    </div>
  )
}
