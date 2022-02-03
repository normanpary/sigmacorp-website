import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Component } from 'react'
import Back from '/public/static/images/home/Back.svg'
import Next from '/public/static/images/home/Next.svg'
import CarouselItem from './CarouselItem'
import { carouselData } from '@/data/homepage'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.sliderGoTo = this.sliderGoTo.bind(this)
    this.state = {
      currentSlide: 0,
    }
  }
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
      infinite: false,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      vertical:false,
      verticalSwiping:true,
      afterChange: (index) => this.setCurrentSlide(index),
    }

    return (
      
      <div className="relative">
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          {/*carouselData.map((item, index) => (
            <CarouselItem item={item} key={index} />
          ))*/}
          <div className='sticky'>
            <div className="snap-start bg-cover bg-center min-h-screen p-10 grid grid-cols-2" style={{backgroundImage:"url(static/images/home/farmaceuticos-slider.jpg)"}}>
              
                <div className='flex flex-col justify-center'>
                  <div className="font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">Farmaceuticós</div>
                  <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">Conoce nuestros productos farmaceuticós</div>
                  <div>
                    <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
                    Conocélos
                    </button>
                  </div>
                  
                </div>
                <div className=''>
                  <img className='scale-75' src={"static/images/bote.png"}></img>
                </div>
             
              

            </div>
            <div className="snap-start bg-cover bg-center min-h-screen p-10 grid grid-cols-2" style={{backgroundImage:"url(static/images/home/farmaceuticos-slider.jpg)"}}>
              
                <div className='flex flex-col justify-center'>
                  <div className="font-mulish uppercase text-rosa tracking-wider text-xl font-black pb-1 sm:text-4xl xl:text-8xl">Farmaceuticós</div>
                  <div className="font-mulish text-gray-800 tracking-wider font-semibold pb-10 sm:text-4xl xl:text-3xl">Conoce nuestros productos farmaceuticós</div>
                  <div>
                    <button className="bg-violeta hover:bg-indigo-800 text-white font-black py-2 px-10 rounded-full text-xl">
                    Conocélos
                    </button>
                  </div>
                  
                </div>
                <div className=''>
                  <img className='scale-75' src={"static/images/bote.png"}></img>
                </div>
             
              

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
        <div className="absolute flex left-10 sm:left-16 md:left-24 inset-y-2/3 sm:inset-y-9/16">
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
