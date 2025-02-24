import LayoutNuevo from '../../layouts/_layoutNuevo'

//import { useEffect, useState } from 'react'
import React, { useState, useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

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

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById('banner').offsetHeight;
      const scrollPosition = window.scrollY;
      const startFade = bannerHeight * 0.4;
      const endFade = bannerHeight * 0.5;
      const newOpacity = 1 - ((scrollPosition - startFade) / (endFade - startFade));
      setBannerOpacity(Math.max(Math.min(newOpacity, 1), 0));
    };

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
  <div className="container mx-auto p-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] text-center">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' , delay: 1 }}
      >
        <div className="lg:flex lg:flex-col font-extrabold text-4xl lg:text-6xl xl:text-6xl py-4">
          <div className="text-white">{t('home:el_cuidado')}</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 4 }}
      >
        <div className="text-xl text-white">
          <p>{t('home:la_salud')}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 4 }}
      >
        <Link href={'./noticias'} aria-label={`Link to News`}>
          <a>
            <div className="hover:bg-violeta bg-rosa text-white text-lg lg:text-xl rounded-full py-1 px-4 mt-8 mb-2 px-8 inline-block">
              {t('home:explorar_productos')}
            </div>
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

{/**NEW SECTION */}
<section className="relative h-screen flex flex-col items-center justify-center bg-white text-black">
       
        <div className="relative w-full p-20">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-contain scale-150">
            <source src="/static/videos/tierra.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-0"></div> {/* Capa negra semi-transparente */}
          <div className="relative h-full flex">
            <div className="w-1/2 flex items-center justify-center">
              <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Título Izquierda</h3>
                <p>Texto descriptivo izquierda.</p>
              </div>
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4 p-4">
            <div className="p-4 bg-white  col-span-2">
            <p className="font-extrabold text-gray-500 pb-4 text-lg">{t('home:promesa')}</p>
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                {t('home:desarrollo')}
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pb-8">
                {t('home:continuo')}
              </p>
              </div>
              <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Título 1</h3>
                <p>Texto descriptivo 1.</p>
              </div>
              <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Título 2</h3>
                <p>Texto descriptivo 2.</p>
              </div>
              <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Título 3</h3>
                <p>Texto descriptivo 3.</p>
              </div>
              <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Título 4</h3>
                <p>Texto descriptivo 4.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**FIN NEW SECTION */}

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
</div>
    
  );
}

Page.getLayout = function getLayout(page) {
  return <LayoutNuevo>{page}</LayoutNuevo>;
};