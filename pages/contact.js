import useTranslation from 'next-translate/useTranslation'
import ItemDepto from '@/components/contacts/ItemDepto'
import Formulario from '@/components/contacts/Formulario'

import { biofarmas, nutraceuticos } from '@/data/contacts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export async function getStaticProps({ locale }) {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default function Maquila() {
  const { t } = useTranslation()
  return (
    <>
      <div className="relative">
        <img
          className="h-48 object-cover sm:h-auto sm:object-contain"
          src="/static/images/contacts/fondo.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white" />
        <div className="absolute top-4 left-8 md:top-8">
          <p className="text-pink-700 text-xl md:text-5xl  font-extrabold">
            {t('contacts:contactanos')}
          </p>

          <p className="leading-4">{t('contacts:contactanos_text')}</p>
        </div>
        <span className="text-xs md:text-base absolute bottom-2 right-2 sm:bottom-6 sm:right-6 sm:w-44 text-center leading-tight  text-white font-bold bg-violeta rounded-full px-1 sm:py-1  sm:px-2 md:px-4 ">
          {t('contacts:llamanos')}
        </span>
      </div>
      {/**nuestras ubicacionwa*/}
      <div className="p-8 w-full bg-fondo bg-no-repeat bg-left-top">
        <p className="text-xl md:text-3xl text-pink-700 font-extrabold">{t('contacts:nuestras')}</p>
        <p className="text-xl md:text-3xl text-blue-800 font-extrabold">
          {t('contacts:ubicaciones')}
        </p>
        <div className="mt-8 md:px-10 flex flex-col gap-8">
          <p>
            {t('contacts:a1')}
            <strong>{t('contacts:a2')}</strong>
            {t('contacts:a3')}
            <strong>
              {'La Paz, Santa Cruz, Cochabamba, Sucre, Tarija, Potosí Oruro y Pando. '}
            </strong>
            {t('contacts:a4')}
          </p>
          <p>
            {t('contacts:b1')}
            <strong>{t('contacts:b2')}</strong> {t('contacts:b3')}
          </p>
          <p>
            {t('contacts:c1')} <strong>800171700</strong>
          </p>
        </div>
      </div>
      {/**telefonos */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 justify-center content-center gap-10 md:gap-20">
        <div className="flex flex-col justify-end sm:items-end w-full">
          <div className="flex flex-col text-center items-center gap-4">
            <p className=" text-xl md:text-2xl font-extrabold">
              <img
                className="h-8 w-auto float-left mr-2"
                src="/static/images/contacts/icon_phone.png"
                alt="Telefonos"
              />
              {t('contacts:telefonos')}
            </p>

            <p>Tel: 4780411 Tel: 4780412</p>
            <p>Tel: 4780413 Tel: 4780414</p>
            <p>Tel: 4780415 Tel: 4780416</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-xl md:text-2xl font-extrabold text-center">
            <img
              className="h-8 w-auto float-left mr-2"
              src="/static/images/contacts/icon_location.png"
              alt="Telefonos"
            />
            {t('contacts:planta_industrial')}
          </p>
          <p>{t('contacts:planta_industrial_text')}</p>
        </div>
      </div>
      {/**Biofarma */}
      <p className="mt-8 ml-8 mr-8 text-center text-blue-900 text-xl md:text-5xl  font-extrabold">
        BIOFARMA
      </p>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8">
        {biofarmas.map((item) => (
          <ItemDepto item={item} key={item} />
        ))}
      </div>

      {/**sigma nutreceuticos */}
      <p className="mt-8 ml-8 mr-8 text-center text-blue-900 text-xl md:text-5xl  font-extrabold">
        SIGMA NUTRACÉUTICOS
      </p>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8">
        {nutraceuticos.map((item) => (
          <ItemDepto item={item} key={item} />
        ))}
      </div>
      {/**contactanos */}
      <p className="mt-8 ml-8 mr-8 text-center text-blue-900 text-xl md:text-5xl  font-extrabold">
        {t('contacts:contactanos')}
      </p>
      <div className="mr-8 ml-8 mb-16">
        <Formulario />
      </div>
    </>
  )
}
