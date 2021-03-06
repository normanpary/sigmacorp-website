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

export default function HomePage({ posts, locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <Carousel />

      <div className="p-4 flex justify-center">
        <Fade right>
          <div className="grid grid-cols-2 gap-4 md:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row  lg:-mt-40">
            {items_card.map((item, index) => (
              <ItemCard item={item} key={index} index={index} />
            ))}
          </div>
        </Fade>
      </div>

      <div className=" space-y-6 md:space-y-0 p-8 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:px-8 lg:px-28 bg-fondo_reverse bg-no-repeat bg-right-top">
        <Fade bottom cascade>
          <div>
            <p className="font-extrabold text-gray-500 pb-4">{t('home:quienes_somos')}</p>
            <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-extrabold">
              {t('home:laboratorio')}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-extrabold pb-8">
              {t('home:sigma')}
            </p>
            <p className="text-xs font-bold pb-4">{t('home:ofrecemos')}</p>
            <p className="text-xs text-gray-600 pb-8">{t('home:proporcionamos')}</p>
            <p className="text-xs underline font-semibold text-blue-800">{t('home:leer_mas')}</p>
          </div>
        </Fade>
        <div className="relative md:col-start-1 md:row-start-1">
          <Zoom>
            <div className="hidden sm:flex justify-end w-full">
              <img className="w-2/3" src="/static/images/home/children.png" />
            </div>
          </Zoom>
          <Fade left>
            <div className="flex w-full sm:w-60 sm:absolute sm:bottom-10 sm:left-10">
              <ItemProposito />
            </div>
          </Fade>
        </div>
      </div>

      <div className="bg-gray-200 bg-fondo bg-no-repeat bg-left-top p-8 mt-8">
        <Fade bottom>
          <p className="font-extrabold text-gray-500 text-center">{t('home:nuestro_blog')}</p>
        </Fade>
        <Fade bottom>
          <div className="flex justify-center mt-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-extrabold">
              {t('home:responsabilidad')}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-extrabold pl-2">
              {t('home:social')}
            </p>
          </div>
        </Fade>

        {/**BLOG */}
        <Fade right>
          <input
            className="bg-violeta text-white text-xs rounded-full py-1 px-4 mt-8 ml-8 mb-2"
            type="button"
            value={t('home:ver_blog')}
          />
          <div className="p-4 sm:p-8 justify-center">
            <BlogCarousel posts={posts} />
          </div>
        </Fade>
      </div>
    </>
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
