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
import Slide01 from './Slide01'
import Slide02 from './Slide02'
import Slide03 from './Slide03'


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
      autoplaySpeed: 10000,
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
      <Slide02/>
     <Slide01/>
     
     <Slide03/>
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
