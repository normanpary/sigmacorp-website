import LayoutNuevo from '../../layouts/_layoutNuevo'

//import { useEffect, useState } from 'react'
import React, { useState, useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { motion, useInView } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRef } from 'react';

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
 

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}


export default function Page() {
  const { t } = useTranslation()
  const [bannerOpacity, setBannerOpacity] = useState(1);
  const [videoWidth, setVideoWidth] = useState('100%')
  const [videoWidth2, setVideoWidth2] = useState('100%')
  const [videoWidth3, setVideoWidth3] = useState('100%')

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById('banner').offsetHeight;
      const scrollPosition = window.scrollY;
      const startFade = bannerHeight * 0.4;
      const endFade = bannerHeight * 0.5;
      const newOpacity = 1 - ((scrollPosition - startFade) / (endFade - startFade));
      setBannerOpacity(Math.max(Math.min(newOpacity, 1), 0));
      const adjustVideoSize = (containerId, videoId, setVideoSize) => {
        const container = document.getElementById(containerId)
        const videoElement = document.getElementById(videoId)
        if (!container || !videoElement) return

        const containerWidth = container.offsetWidth
        const videoRect = videoElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const videoStartTrigger = windowHeight * 0.2

        if (videoRect.top > videoStartTrigger) {
          setVideoSize('100%')
        } else {
          const scaleFactor = ((videoStartTrigger - videoRect.top) / windowHeight) * 100
          const newWidth = Math.min(containerWidth, containerWidth * (1 + scaleFactor / 100))
          setVideoSize(`${newWidth}px`)
        }
      }

      adjustVideoSize('desarrollo-continuo', 'scroll-video', setVideoWidth)
      adjustVideoSize('crecimiento', 'scroll-video-2', setVideoWidth2)
      adjustVideoSize('crecimiento', 'scroll-video-3', setVideoWidth3)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='-mt-24'>
{/**BANNER */}
<div id="banner" className="relative overflow-hidden h-screen w-full" style={{ opacity: bannerOpacity, transition: 'opacity 0.5s' }}>
  <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
    <source src="/static/videos/video01.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-violeta bg-opacity-50"></div> {/* Capa violeta semi-transparente */}
  <div className="relative bg-no-repeat bg-left-top p-10 h-full flex items-center justify-center">
  <div className="container mx-auto p-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[80%] text-center">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' , delay: 1 }}
      >
        <div className="lg:flex lg:flex-col font-bold text-4xl lg:text-8xl xl:text-8xl py-4">
          <div className="text-white">{t('home:el_cuidado')}</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 2 }}
      >
        <div className="text-xl text-white">
          <p>{t('home:la_salud')}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 2 }}
      >
        <Link href={'./noticias'} aria-label={`Link to News`}>
          <a>
          <button class="mt-8 group relative inline-flex h-12 text-xl items-center justify-center overflow-hidden rounded-full bg-rosa px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>EXPLORAR PRODUCTOS</span></button>
          </a>
        </Link>
      </motion.div>
      <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 4 }}
            className="mt-24"
          >
            <div className="flex justify-center mt-24">
              <svg
                className="w-8 h-8 animate-none"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                ></path>
              </svg>
            </div>
          </motion.div>
    </div>
  </div>
</div>
{/*FIN BANNER*/}

{/**DESARROLLO CONTINUO NUEVO */}
<div className='container mx-auto max-w-[90%] lg:max-w-[80%] xl:max-w-[90%] text-left p-10'>
<motion.div className="text-xl sm:text-2xl md:text-9xl text-rosa font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          DESARROLLO
        </motion.div>
        <motion.div className="text-xl sm:text-2xl md:text-9xl text-violeta font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          CONTINUO
        </motion.div>
        <div id="desarrollo-continuo" className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-10">
          <div className="  z-10 ">
          <video
            id="scroll-video"
            autoPlay
            loop
            muted
            className="object-cover rounded-3xl transition-all duration-500"
            style={{ width: videoWidth, maxWidth: '90vw', height: 'auto' }}
          >
            <source src="/static/videos/video06.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="flex ">
            <div>
            
              <h2 className="text-2xl font-bold mb-4">Optimización en los procesos de producción</h2>
              <p className="text-lg text-gray-700 pb-8">Cada producto de Sigma Corp. refleja un compromiso con la calidad y el desarrollo. Nuestras modernas instalaciones y nuestro equipo calificado trabajan en sinergia para optimizar procesos y entregar farmacéuticos y nutracéuticos confiables que aporten al bienestar de nuestra comunidad.</p>
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-rosa px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>LEER MÁS</span></button>
            </div>
          </div>
        </div>


      </div>
{/*FIN DESARROLLO CONTINUO NUEVO*/}



{/**DESARROLLO CONTINUO NUEVO */}
<div className='container mx-auto max-w-[90%] lg:max-w-[80%] xl:max-w-[90%] text-left p-10 pt-40'>
<motion.div className="text-xl sm:text-2xl md:text-9xl text-rosa font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          APORTANDO AL CRECIMIENTO
        </motion.div>
        <motion.div className="text-xl sm:text-2xl md:text-9xl text-violeta font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          DE BOLIVIA
        </motion.div>
        <div id="crecimiento" className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-10">
          <div className="  z-10 ">
          <video
            id="scroll-video-2"
            autoPlay
            loop
            muted
            className="object-cover rounded-3xl transition-all duration-500"
            style={{ width: videoWidth2, maxWidth: '90vw', height: 'auto' }}
          >
            <source src="/static/videos/video-bolivia.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="flex ">
            <div>
            
              <h2 className="text-2xl font-bold mb-4">Exportacion de farmaceuticos a otros paises</h2>
              <p className="text-lg text-gray-700 pb-8">Industria Químico Farmacéutica SIGMA CORP. S.R.L., una empresa líder boliviana, ahora está registrada ante la FDA como fabricante farmacéutico en EE. UU., gracias a la colaboración con KRTL Biotech Inc.</p>
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-rosa px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>LEER MÁS</span></button>
            </div>
          </div>
        </div>


      </div>
{/*FIN DESARROLLO CONTINUO NUEVO*/}


{/**DESARROLLO CONTINUO NUEVO */}
<div className='container mx-auto max-w-[90%] lg:max-w-[80%] xl:max-w-[90%] text-left p-10'>
<motion.div className="text-xl sm:text-2xl md:text-9xl text-rosa font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          INDUSTRIA QUÍMICO FARMACÉUTICA
        </motion.div>
        <motion.div className="text-xl sm:text-2xl md:text-9xl text-violeta font-bold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '-250px' }}
          >
          SIGMA CORP
        </motion.div>
        <div id="indsutria" className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-10">
          <div className="  z-10 ">
          <video
            id="scroll-video-3"
            autoPlay
            loop
            muted
            className="object-cover rounded-3xl transition-all duration-500"
            style={{ width: videoWidth3, maxWidth: '90vw', height: 'auto' }}
          >
            <source src="/static/videos/video-planta.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="flex ">
            <div>
            
              <h2 className="text-2xl font-bold mb-4">Ofrecemos más de 48 años de experiencia exitosa en el mercado Farmacéutico y Nutracéutico de Bolivia.</h2>
              <p className="text-lg text-gray-700 pb-8">Tenemos como compromiso el proporcionar productos y servicios de calidad, buscando siempre la excelencia de nuestros procesos junto a la participación de un equipo humano competente e idóneo para contribuir cada día al bienestar de nuestra población.</p>
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-rosa px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>LEER MÁS</span></button>
            </div>
          </div>
        </div>


      </div>
{/*FIN DESARROLLO CONTINUO NUEVO*/}

 {/** NUESTRO PROCESO */}
 <div className="bg-rosa bg-fondo bg-no-repeat bg-left-top">
        <div className=" container mx-auto p-10 py-60 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div>
              <p className="font-extrabold text-white text-center text-4xl">{t('home:conoce_como_trabajamos')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="flex justify-center mt-4">
              <p className="text-9xl sm:text-2xl md:text-9xl text-white font-bold text-center">
                {t('home:nuestro_proceso')}{t('home:tu_salud')}
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
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-1 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-maquila.png" />
                  </div>
                  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-violeta px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>MAQUILA</span></button>
               
                </div>
                <div className="flex items-center justify-center h-full">
                  <img className="h-10 mb-20" src="/static/images/inicio/icono-flecha-rosa.png" />
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-1 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-distribucion.png" />
                  </div>
                  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-violeta px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>DISTRIBUCIÓN</span></button>
                </div>
                <div className="flex items-center justify-center h-full">
                  <img className="h-10 mb-20" src="/static/images/inicio/icono-flecha-rosa.png" />
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <div className="bg-rosa px-4 py-6 md:px-10 md:py-1 rounded-lg flex flex-col items-center justify-center">
                    <img className="h-10 md:h-32 my-6" src="/static/images/inicio/icono-ventas.png" />
                  </div>
                  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-violeta px-12 font-medium text-white"><div class="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><span>VENTAS</span></button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/** FIN NUESTRO PROCESO */}
      
      <div className='p-20'>

      
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="flex justify-center mt-4">
              <p className="text-9xl sm:text-2xl md:text-9xl text-rosa font-bold text-left">
                RESPONSABILIDAD SOCIAL
              </p>
              
            </div>
          </motion.div>

        <div className="overflow-hidden relative py-20">
          <div
            className="flex w-[200%] animate-scroll"
            onMouseEnter={() => document.querySelector('.animate-scroll').style.animationPlayState = 'paused'}
            onMouseLeave={() => document.querySelector('.animate-scroll').style.animationPlayState = 'running'}
          >
            
            <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                </div><div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                </div><div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
                <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
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
          
            
          </div>
          <style jsx>{`
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>




      <div className='p-4'>

      
          
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeIn' }}
  viewport={{ margin: '-100px' }}
>
  <div className="flex justify-center mt-4">
    <p className="text-9xl sm:text-2xl md:text-9xl text-rosa font-bold text-left">
      ACTIVACIONES Y BTL
    </p>
    
  </div>
</motion.div>

<div className="overflow-hidden relative py-20">
<div
  className="flex w-[200%] animate-scroll"
  onMouseEnter={() => document.querySelector('.animate-scroll').style.animationPlayState = 'paused'}
  onMouseLeave={() => document.querySelector('.animate-scroll').style.animationPlayState = 'running'}
>
  
  <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      </div><div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      </div><div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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
      <div className="w-1/4 transition hover:-translate-y-3 hover:shadow-lg m-2">
        <div className="h-auto  bg-white  rounded-md">
          <div className="">
            <img
              className="object-cover h-48 w-full rounded-t-md"
              src={'static/images/home/noticia2.jpg'}
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

  
</div>
<style jsx>{`
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>
</div>
</div>


</div>
    
  );
}

Page.getLayout = function getLayout(page) {
  return <LayoutNuevo>{page}</LayoutNuevo>;
};