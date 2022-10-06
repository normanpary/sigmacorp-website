import { items_card } from '@/data/homepage'
import ItemCard from '@/components/homepage/ItemCard'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

const Jarallax = dynamic(() => import('../components/Jarallax'), { ssr: false })
import JarallaxImage from '../components/JarallaxImage'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query';

export async function getStaticProps({locale}) {
  const queryClient = new QueryClient()
 
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function About({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      {/**BANNER */}
      <div className="bg-[url('/static/images/about/fondo.png')] bg-cover bg-center h-96">
        <Jarallax
          className="h-96 mb-20"
          videoEndTime={10}
          videoLoop={false}
          speed={1.6}
          videoSrc="https://youtu.be/xUifNB1SeAI"
        >
          <div className="bg-gradient-to-r from-white/80 to-white/0 h-96">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '0px' }}
            >
              <div className="container mx-auto pt-24">
                <div className="lg:flex lg:flex-row font-extrabold text-5xl">
                  <div className="text-pink-700 ">{t('about:sobre')}</div>
                  <div className="text-violeta">{t('about:nosotros')}</div>
                </div>
                <div className="">
                  <a href="./" className="hover:text-pink-700 font-bold">
                  {t('about:inicio')}
                  </a>{' '}
                  / {t('about:sobre_nosotros')}
                </div>
              </div>
            </motion.div>
          </div>
        </Jarallax>
      </div>
      {/*FIN BANNER*/}

      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14  grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <LightBox video={0} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div className="lg:pr-36">
              <p className="font-extrabold text-gray-500 pb-4 text-lg">
                {t('about:quienes_somos')}
              </p>
              <p className="text-xl sm:text-2xl md:text-6xl text-pink-700 font-extrabold">
                {t('about:sigma')}
              </p>
              <p className="text-xl sm:text-2xl md:text-6xl text-blue-800 font-extrabold pb-8">
                {t('about:corp')}
              </p>
              <p className="text-lg font-bold pb-4 ">{t('about:establecidos')}</p>
              <p className="text-lg text-gray-600 pb-8">{t('about:cuidamos')}</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      {/*NUESTROS PROPOSITOS*/}
      <div className="bg-[url('/static/images/about/proposito.png')] bg-cover bg-top">
        <div className="bg-gradient-to-r from-white/0 to-white/90 ">
          <div className="container mx-auto py-14  grid lg:grid-cols-2 gap-16">
            <div></div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="lg:pr-36">
                <p className="text-xl md:text-6xl text-pink-700 font-extrabold">
                  {t('about:nuestros')}
                </p>
                <p className="text-xl md:text-6xl pt-3 text-blue-800 font-extrabold">
                  {t('about:proposito')}
                </p>
                <p className="mt-2 md:mt-4 text-lg line md:pr-8 leading-8">
                  {t('about:proposito_text')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/*FIN NUESTROS PROPOSITOS*/}
      {/*CULTURA ORGANIZACIONAL*/}
      <div className="bg-[url('/static/images/about/culture.jpg')] bg-cover bg-center">
        <div className="bg-hexagon bg-no-repeat">
          <div className="container mx-auto py-14  grid grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-200px' }}
            >
              <div>
                <p className="font-extrabold pl-8 text-gray-500">{t('about:valores')}</p>
                <div className="pl-8 pr-8">
                  <p className="text-xl md:text-6xl text-pink-700 font-extrabold">
                    {t('about:cultura')}
                  </p>
                  <p className="text-xl md:text-6xl text-blue-800 font-extrabold">
                    {t('about:organizacional')}
                  </p>
                </div>
              </div>
            </motion.div>
            <div></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-200px' }}
          >
            <div className="container mx-auto px-16 grid lg:grid-cols-2 gap-16">
              <div className="space-y-4">
                <p className="text-lg md:text-3xl text-pink-700 font-black">
                  {t('about:integridad')}
                </p>
                <p className="text-lg pl-6 text-gray-600"> {t('about:integridad_text')}</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-3xl text-pink-700 font-black">{t('about:etica')}</p>
                <p className="text-lg pl-6 text-gray-600"> {t('about:etica_text')}</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-3xl text-pink-700 font-black">
                  {t('about:eficacia')}
                </p>
                <p className="text-lg pl-6 text-gray-600"> {t('about:eficacia_text')}</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-3xl text-pink-700 font-black">
                  {t('about:compromiso')}
                </p>
                <p className="text-lg pl-6 text-gray-600"> {t('about:compromiso_text')}</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-3xl text-pink-700 font-black">
                  {t('about:honestidad')}
                </p>
                <p className="text-lg pl-6 text-gray-600"> {t('about:honestidad_text')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN CULTURA ORGANIZACIONAL*/}
      {/*RESPONSABILIDAD SOCIAL*/}
      <div className="bg-hexagon_reverse bg-right bg-no-repeat">
        <div className="container mx-auto py-14">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-200px' }}
          >
            <p className="sm:text-right text-xl md:text-6xl text-pink-700 font-extrabold">
              {t('about:responsabilidad')}
            </p>
            <p className="sm:text-right text-xl md:text-6xl text-blue-800 font-extrabold">
              {t('about:social')}
            </p>

            <LightBox video={1} />
          </motion.div>
        </div>
      </div>
      {/*FIN RESPONSABILIDAD SOCIAL*/}

      {/**CAJAS VALORES */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-14 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-200px' }}
          >
            <div className="flex flex-col sm:flex-row justify-center pb-14">
              <p className="text-xl  md:text-6xl text-pink-700 font-extrabold">
                {t('about:marcamos')}
              </p>
              <p className="text-xl md:text-6xl text-blue-800 font-extrabold pl-2">
                {t('about:diferencia')}
              </p>
            </div>

            <div className="container relative mb-10 mx-auto max-w-[60%] grid lg:grid-cols-4 gap-6 z-10">
              <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-10 py-8 rounded-xl flex flex-col items-center">
                <div className="min-h-[80px] flex flex-col-reverse">
                  <img
                    className="relative inset-x-0 bottom-0"
                    src={'static/images/home/innovacion.png'}
                  />
                </div>
                <div className="text-center font-black text-xl uppercase pt-4">{t('home:innovacion')}</div>
                <div className="text-center pt-4 text-sm">
                {t('home:innovacion_text')}
                </div>
              </div>

              <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-10 py-8 rounded-xl flex flex-col items-center">
                <div className="min-h-[80px] flex flex-col-reverse">
                  <img className="" src={'static/images/home/crecimiento.png'} />
                </div>
                <div className="text-center font-black text-xl uppercase pt-4">{t('home:crecimiento')}</div>
                <div className="text-center pt-4 text-sm">
                {t('home:crecimiento_text')}
                </div>
              </div>

              <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-10 py-8 rounded-xl flex flex-col items-center">
                <div className="min-h-[80px] flex flex-col-reverse">
                  <img className="" src={'static/images/home/desarrollo.png'} />
                </div>
                <div className="text-center font-black text-xl uppercase pt-4">{t('home:desarrollo')}</div>
                <div className="text-center pt-4 text-sm">
                {t('home:desarrollo_text')}
                </div>
              </div>

              <div className="transition bg-azul opacity-90 hover:bg-rosa hover:-translate-y-6  text-white px-10 py-8 rounded-xl flex flex-col items-center">
                <div className="min-h-[80px] flex flex-col-reverse">
                  <img className="" src={'static/images/home/proyeccion.png'} />
                </div>
                <div className="text-center font-black text-xl uppercase pt-4">{t('home:proyeccion')}</div>
                <div className="text-center pt-4 text-sm">
                {t('home:proyeccion_text')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/**FIN CAJAS VALORES */}
    </>
  )
}
