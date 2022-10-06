import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'

import Script from 'next/script'
import HomeParticlesAnimation from '../../components/HomeParticlesAnimation'

import { dehydrate, QueryClient, useQuery } from 'react-query'

import Link from 'next/dist/client/link'
import { getNutraceuticProducts} from 'queries/queries'
import { useRouter } from 'next/router'
import NutraceuticCard from '@/components/category/NutraceuticCard'


import useScript from 'hooks/useScript'


export async function getServerSideProps(context) {
  
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryNutraceutics', context.locale], async () =>
    getNutraceuticProducts(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default function Nutraceutics() {
 
  useScript("/static/js/text-particles/script.js" )
  const { t } = useTranslation()
  const router = useRouter()
  const { data: products, isSuccess, isLoading } = useQuery(
    ['queryProducts', router.locale],
    async () => getNutraceuticProducts(router.locale)
  )
    



  return (
    <div className='overflow-hidden'>  
      <div className="bg-[url('/static/images/dna.png')] bg-cover bg-center h-[150px] lg:h-[600px]">
        <div className="bg-gradient-to-r from-white/80 to-white/50 h-[150px] lg:h-[600px]">
          <canvas className="hidden lg:block mx-auto w-[300px] h-[200px] lg:w-[1200px] lg:h-[600px] " id="scene"></canvas>
          <input className="invisible" id="copy" type="text" value={t('nutraceutics:nutraceuticos_texto')} />
        </div>
      </div>

      {/**BANNER */}
      <div className="p-4 -mt-[200px] lg:-mt-[650px]">
        <div className="">
          <div className="container mx-auto pt-16">
            <div className="">
              <a href="#" className="hover:text-pink-700 font-bold">
              {t('nutraceutics:inicio_miga')}
              </a>{' '}
              / {t('nutraceutics:nutraceuticos_miga')}
            </div>
            <div className="font-extrabold  text-4xl lg:text-6xl">
              <div className="text-pink-700 ">{t('nutraceutics:productos')}</div>
              <div className="text-violeta">{t('nutraceutics:nutraceuticos')}</div>
            </div>
          </div>
        </div>
      </div>
      {/*FIN BANNER*/}
      <div className="container p-4 mx-auto lg:mt-[200px] lg:mb-[50px] text-center">
        <div className="lg:max-w-xl text-lg pt-5 text-center mx-auto">
        {t('nutraceutics:sigma_nutraceuticos_ofrece')}
        </div>
        <div className="lg:max-w-xl text-lg pt-5 text-center mx-auto">
          <strong>{t('nutraceutics:somos_la_solucion')}</strong>
        </div>
      </div>

      {/**te gustaria cotizacion */}
      {/**<BlogCarousel posts={posts} />*/}
   
        <div className="p-4 lg:container lg mx-auto text-center pb-[50px]">
          
          <div className="flex justify-center pb-5">
            <img className="w-[280px] lg:w-[680px]" src="/static/images/logo-nutraceuticos.png" />
          </div>

          <div className="text-xl">
            {' '}
            {t('nutraceutics:conoce')}
          </div>
        </div>
      
      <div className="container p-4 lg:relative mb-10 mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12 ">
      {isSuccess &&
              products.data.map((product) => (
                <NutraceuticCard
                  title={product.attributes.title}
                  slugProduct={product.attributes.slug}
                  image={product.attributes.image.data.attributes.url}

                />
              ))}
      </div>


    </div>
  )
}
