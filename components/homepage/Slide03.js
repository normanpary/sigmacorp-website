import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Component } from 'react'
import Back from '/public/static/images/home/Back.svg'
import Next from '/public/static/images/home/Next.svg'
import CarouselItem from './CarouselItem'
import { carouselData } from '@/data/homepage'
import { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import HomePage from 'pages'


export default function Slide03() {
  
    const { t } = useTranslation()
    return (
      <div className="">
      <div
        className="bg-cover bg-bottom p-10 lg:p-20 grid grid-cols-2"
        style={{ backgroundImage: 'url(static/images/home/maquila-slider.jpg)' }}
      >
        <div className="max-h-[600px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            <div className="transition-transform font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">
            {t('home:maquila')}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
          >
            <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">
            {t('home:fabrica')}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
          >
            <div>
              <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-2 lg:px-10 rounded-full lg:text-xl">
              {t('home:conoce_nuestra_fabrica')}
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            transition: { repeatType: 'reverse', repeat: Infinity, duration: 2 },
          }}
        >
          <div className="max-h-[700px] flex flex-col justify-center">
            <img className="scale-50" src= {t('home:iconos_maquila')}></img>
          </div>
        </motion.div>
      </div>
    </div>

    )
  }
