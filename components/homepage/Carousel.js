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

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.sliderGoTo = this.sliderGoTo.bind(this)
    this.state = {
      currentSlide: 0,
    }
    this.slide = this.slide.bind(this)
  }
  slide(y) {
    /*
    y > 0 ? (
      this.slider.slickNext()
    ) : (
      this.slider.slickPrev()
    )*/
  }
  //componentWillMount() {
  //window.addEventListener('wheel', (e) => {
  //  console.log('wheel');
  //this.slide(e.wheelDelta);
  //})
  //}

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index })
  }

  sliderGoTo(index) {
    this.setCurrentSlide(index)
    this.slider.slickGoTo(index)
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      vertical: false,
      verticalSwiping: false,
      draggable: true,
      pauseOnHover: true,

      afterChange: (index) => this.setCurrentSlide(index),
    }

    return (
      <div className="" onWheel={(e) => this.slide(e.deltaY)}>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          {/*<Slider {...settings} ref={(c) => (this.slider = c)}>
          {/*carouselData.map((item, index) => (
            <CarouselItem item={item} key={index} />
          ))*/}

          {/**SLIDE 01 */}
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
                    Farmaceuticós
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
                >
                  <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">
                    Conoce nuestros productos farmaceuticós
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
                >
                  <div>
                    <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
                      Conocélos
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
                <div className="max-h-[700px] flex flex-col justify-center">
                  <img className="scale-50" src={'static/images/caja1.png'}></img>
                </div>
              </motion.div>
            </div>
          </div>

          {/**SLIDE 02 */}
          <div className=" ">
            <div
              className="bg-cover bg-center p-20 grid grid-cols-2"
              style={{ backgroundImage: 'url(static/images/home/nutraceuticos-slider.jpg)' }}
            >
              <div className="max-h-[700px] flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                >
                  <div className="transition-transform font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">
                    Nutraceuticós
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
                >
                  <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">
                    Suplementos para todas las etapas de tu vida.
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
                >
                  <div>
                    <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
                      Conocélos
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
                <div className="max-h-[700px] flex flex-col justify-center">
                  <img className="scale-50" src={'static/images/carmelo1.png'}></img>
                </div>
              </motion.div>
            </div>
          </div>

          {/**SLIDE 03*/}
          <div className="">
            <div
              className="bg-cover bg-bottom p-20 grid grid-cols-2"
              style={{ backgroundImage: 'url(static/images/home/maquila-slider.jpg)' }}
            >
              <div className="max-h-[600px] flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                >
                  <div className="transition-transform font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">
                    Maquila
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
                >
                  <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">
                    Fabrica con nosotros tus productos farmaceuticós
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 1000 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
                >
                  <div>
                    <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
                      Conocé nuestra fábrica
                    </button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                whileInView={{ opacity: 1, x: 100 }}
                transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: { repeatType: 'reverse', repeat: Infinity, duration: 2 },
                }}
              >
                <div className="max-h-[700px] flex flex-col justify-center">
                  <img className="scale-50" src={'static/images/home/iconos-maquila.png'}></img>
                </div>
              </motion.div>
            </div>
          </div>
        </Slider>
        <button
          className="absolute w-8 h-8 left-2 md:left-6 inset-y-1/2 rounded-full bg-gray-200 cursor-pointer"
          onClick={this.previous}
        >
          <Back />
        </button>
        <button
          className="absolute w-8 h-8 right-2 md:right-6 inset-y-1/2 rounded-full bg-gray-200 cursor-pointer"
          onClick={this.next}
        >
          <Next />
        </button>
        <div className="absolute flex left-10 sm:left-16 md:left-24 inset-y-2/3 sm:inset-y-9/16 mt-60">
          {carouselData.map((element, index) => {
            return (
              <button
                className={
                  index === this.state.currentSlide
                    ? 'h-2 w-6 bg-pink-700 rounded-full mx-2 mb-2 cursor-pointer'
                    : 'h-2 w-2 bg-gray-400 rounded-full mx-2 mb-2 cursor-pointer'
                }
                key={index}
                onClick={() => {
                  this.sliderGoTo(index)
                }}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
