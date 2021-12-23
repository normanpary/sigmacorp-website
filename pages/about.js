import { items_card } from '@/data/homepage'
import ItemCard from '@/components/homepage/ItemCard'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <div className="relative">
        <img
          className="h-48 object-cover sm:h-full sm:object-contain"
          src="/static/images/about/fondo.png"
          alt="sobre nosotros"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white" />
        <div className="absolute top-4 left-8 md:top-8">
          <div className="flex flex-row font-extrabold text-xl md:text-5xl">
            <p className="text-pink-700">{t('about:sobre')}</p>
            <p className="text-violeta">{t('about:nosotros')}</p>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col bg-fondo bg-no-repeat bg-left-top md:flex-row-reverse md:gap-6 md:justify-center md:px-28 lg:px-40">
        <div className="md:w-1/2">
          <p className="font-extrabold text-gray-500 pb-4">{t('about:quienes_somos')}</p>
          <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-extrabold">
            {t('about:sigma')}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-extrabold pb-8">
            {t('about:corp')}
          </p>
          <p className="text-xs font-bold pb-4">{t('about:establecidos')}</p>
          <p className="text-xs text-gray-600 pb-8">{t('about:cuidamos')}</p>
        </div>
        <div className="md:w-1/2">
          <LightBox video={0} />
        </div>
      </div>

      {/**IMAGEN y TEXT interior */}
      <div
        className="bg-cover"
        style={{
          backgroundImage: 'url(/static/images/about/proposito.png)',
        }}
      >
        <div className="relative w-full h-full bg-fondo_img bg-no-repeat bg-right-top">
          <div className="absolute h-full w-full bg-white opacity-30"></div>
          <div className="grid md:grid-cols-2">
            <div></div>
            <div className="p-10 z-10">
              <p className="text-xl md:text-3xl  text-pink-700 font-extrabold">
                {t('about:nuestros')}
              </p>
              <p className="text-xl md:text-3xl  text-blue-800 font-extrabold">
                {t('about:proposito')}
              </p>
              <p className="mt-2 md:mt-4 text-sm text-justify md:pr-8">
                {t('about:proposito_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**cultura organizacional */}
      <div className="bg-fondo bg-no-repeat bg-left-top space-y-6 mt-6">
        <p className="font-extrabold pl-8 text-gray-500">{t('about:valores')}</p>
        <div className="pl-8 pr-8">
          <p className="text-xl md:text-3xl text-pink-700 font-extrabold">{t('about:cultura')}</p>
          <p className="text-xl md:text-3xl text-blue-800 font-extrabold">
            {t('about:organizacional')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 px-8 md:pl-20 md:pr-20 ">
          <div className="space-y-4">
            <p className="text-lg md:text-2xl text-pink-700 font-extrabold">
              {t('about:integridad')}
            </p>
            <p className="text-xs pl-6"> {t('about:integridad_text')}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-2xl text-pink-700 font-extrabold">{t('about:etica')}</p>
            <p className="text-xs  pl-6"> {t('about:etica_text')}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-2xl text-pink-700 font-extrabold">
              {t('about:eficacia')}
            </p>
            <p className="text-xs  pl-6"> {t('about:eficacia_text')}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-2xl text-pink-700 font-extrabold">
              {t('about:compromiso')}
            </p>
            <p className="text-xs  pl-6"> {t('about:compromiso_text')}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-2xl text-pink-700 font-extrabold">
              {t('about:honestidad')}
            </p>
            <p className="text-xs  pl-6"> {t('about:honestidad_text')}</p>
          </div>
        </div>
      </div>
      {/**Responsabilidad social */}
      <div className="p-8 w-full bg-fondo_footer bg-no-repeat bg-right-top">
        <p className="sm:text-right text-xl md:text-3xl text-pink-700 font-extrabold">
          {t('about:responsabilidad')}
        </p>
        <p className="sm:text-right text-xl md:text-3xl text-blue-800 font-extrabold">
          {t('about:social')}
        </p>
        <div className="flex justify-center items-center content-center mt-8">
          <LightBox video={1} />
        </div>
      </div>

      <div className="p-8 bg-gray-200">
        <div className="flex flex-col sm:flex-row justify-center">
          <p className="text-xl  md:text-3xl text-pink-700 font-extrabold">{t('about:marcamos')}</p>
          <p className="text-xl md:text-3xl text-blue-800 font-extrabold pl-2">
            {t('about:diferencia')}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-2 md:gap-4 md:flex md:flex-row  mt-8">
          {items_card.map((item, index) => (
            <ItemCard item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}
