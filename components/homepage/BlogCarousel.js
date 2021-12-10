import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BlogCarouselItem from './BlogCarouselItem'
import { Component } from 'react'
import Back from '/public/static/images/search.svg'
import Next from '/public/static/images/home/Next.svg'

export default class BlogCarousel extends Component {
  render() {
    const posts = this.props.posts
    console.log('POSTS length: ' + posts.length)

    let settings

    if (posts.length > 2) {
      settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    }
    if (posts === 1) {
      settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    if (posts.length === 2) {
      settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    }

    return (
      <>
        <Slider {...settings}>
          {posts.map((post, index) => (
            <BlogCarouselItem post={post} key={index} />
          ))}
        </Slider>
      </>
    )
  }
}
