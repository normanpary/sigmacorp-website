import { items_card } from '@/data/homepage'
import siteMetadata from '@/data/siteMetadata'
import ItemCard from '@/components/homepage/ItemCard'
import ItemProposito from '@/components/homepage/ItemProposito'

import useTranslation from 'next-translate/useTranslation'
import { PageSEO } from '@/components/SEO'

import BlogCarousel from '@/components/homepage/BlogCarousel'
import { URL_BLOG_POSTS } from '@/data/api/config'
import axios from 'axios'
import Carousel from '@/components/homepage/Carousel'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { blue, red } from 'tailwindcss/colors'

export default function HomePage({ posts, locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <div className='overflow-hidden'>
      
    </div>
  )
}

export async function getServerSideProps({ locale, locales }) {
  {
    try {
      const response = await axios.get(URL_BLOG_POSTS + locale)
      return {
        props: { posts: response.data, locale, availableLocales: locales },
      }
    } catch (error) {
      return {
        props: { posts: [], locale, availableLocales: locales },
      }
    }
  }
}
