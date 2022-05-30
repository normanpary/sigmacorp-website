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


export default function Slide01() {
  
    const { t } = useTranslation()
    return (
      
     

      <div className="">
      <div
        className="bg-cover bg-center p-20 grid grid-cols-2"
        style={{ backgroundImage: 'url(static/images/home/farmaceuticos-slider.jpg)' }}
      >
        <div className="max-h-[600px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            <div className="transition-transform font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">
              {t('home:farmaceuticos')}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
          >
            <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">
            {t('home:conoce')}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
          >
            <div>
              <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
              {t('home:conocelos')}
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            transition: { repeatType: 'reverse', repeat: Infinity, duration: 2 },
          }}
        >
          <div className="max-h-[700px] flex flex-col justify-center content-center ">
            <Slider
              arrows={false}
              autoplay={true}
              fade={true}
              speed={1500}
              easing={true}
              pauseOnFocus={false}
              pauseOnHover={false}
              adaptiveHeight={false}
              infinite={true}
              autoplaySpeed={3000}
            >
              <img className="scale-50 " src={'static/images/caja1.png'}></img>
              {/*<img className="scale-90 rotate-45 mt-40 " src={'static/images/clorex.png'}></img>
            <img className="scale-50 mt-80 " src={'static/images/sigmavir.png'}></img>*/}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
    

    )
  }
