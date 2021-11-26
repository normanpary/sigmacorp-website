import React, { Component } from 'react'
import Back from '/public/static/images/home/Back.svg'
import Next from '/public/static/images/home/Next.svg'
import Swipe from 'react-easy-swipe'

import CarouselItem from './CarouselItem'
import { carouselData } from '@/data/homepage'
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
      paused: false,
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === carouselData.length - 1 ? 0 : this.state.currentSlide + 1
        this.setState({ currentSlide: newSlide })
      }
    }, 5000)
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === carouselData.length - 1 ? 0 : this.state.currentSlide + 1
    this.setState({ currentSlide: newSlide })
  }

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0 ? carouselData.length - 1 : this.state.currentSlide - 1
    this.setState({ currentSlide: newSlide })
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index })
  }

  render() {
    return (
      <div className="w-full h-auto flex overflow-hidden relative">
        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {carouselData.map((item, index) => {
            return (
              <div
                className={
                  index === this.state.currentSlide ? 'block w-full h-auto object-cover' : 'hidden'
                }
                key={index}
                onMouseEnter={() => {
                  this.setState({ paused: true })
                }}
                onMouseLeave={() => {
                  this.setState({ paused: false })
                }}
              >
                <CarouselItem item={item} />
              </div>
            )
          })}
        </Swipe>

        <div className="absolute w-full flex  left-20 inset-y-9/16">
          {carouselData.map((element, index) => {
            return (
              <div
                className={
                  index === this.state.currentSlide
                    ? 'h-2 w-6 bg-pink-700 rounded-full mx-2 mb-2 cursor-pointer'
                    : 'h-2 w-2 bg-gray-400 rounded-full mx-2 mb-2 cursor-pointer'
                }
                key={index}
                onClick={() => {
                  this.setCurrentSlide(index)
                }}
              ></div>
            )
          })}
        </div>
        <div
          className="absolute w-8 h-8 left-2 md:left-6 inset-y-1/2 rounded-full bg-gray-200 cursor-pointer"
          onClick={this.prevSlide}
        >
          <Back />
        </div>
        <div
          className="absolute w-8 h-8 right-2 md:right-6 inset-y-1/2 rounded-full bg-gray-200 cursor-pointer"
          onClick={this.nextSlide}
        >
          <Next />
        </div>
      </div>
    )
  }
}

export default Carousel
