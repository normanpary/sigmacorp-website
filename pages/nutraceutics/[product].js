import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getNutraceuticDetails } from 'queries/queries'
import { getNutraceuticProducts } from 'queries/queries'
import { useRouter } from 'next/router'
import Script from 'next/script'

import NutraceuticCard from '@/components/category/NutraceuticCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import HomeParticlesAnimation from '../../components/HomeParticlesAnimation'
import Link from 'next/dist/client/link'

import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { buildStyles } from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['queryNutraceuticDetails', context.locale, context.params.product],
    async () => getNutraceuticDetails(context.locale, context.params.product)
  )

  await queryClient.prefetchQuery(['queryNutraceutics', context.locale], async () =>
    getNutraceuticProducts(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Product() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

  const { t } = useTranslation()

  const router = useRouter()

  const { data: nutraceutic, isSuccess, isLoading } = useQuery(
    ['queryNutraceuticDetails', router.locale, router.query.product],
    async () => getNutraceuticDetails(router.locale, router.query.product)
  )

  const { data: products, isSuccess2, isLoading2 } = useQuery(
    ['queryNutraceutics', router.locale],
    async () => getNutraceuticProducts(router.locale)
  )

  const nutraceutic_title = nutraceutic.data[0].attributes.title
  const nutraceutic_image = nutraceutic.data[0].attributes.image.data.attributes.url
  const nutraceutic_short_description = nutraceutic.data[0].attributes.short_description
  const nutraceutic_description = nutraceutic.data[0].attributes.description
  const nutraceutic_claim = nutraceutic.data[0].attributes.claim
  const nutraceutic_technical_description = nutraceutic.data[0].attributes.technical_description
  const nutraceutic_ingredients = nutraceutic.data[0].attributes.ingredients
  const nutraceutic_preparation = nutraceutic.data[0].attributes.preparation
  const nutraceutic_duration = nutraceutic.data[0].attributes.duration
  const nutraceutic_indications = nutraceutic.data[0].attributes.indications
  const nutraceutic_nutritional_table =
    nutraceutic.data[0].attributes.nutritional_table.data.attributes.url

  const nutraceutic_energy = nutraceutic.data[0].attributes.energy
  const nutraceutic_proteins = nutraceutic.data[0].attributes.proteins
  const nutraceutic_total_fat = nutraceutic.data[0].attributes.total_fat
  const nutraceutic_cholesterol = nutraceutic.data[0].attributes.cholesterol
  const nutraceutic_carbohydrates = nutraceutic.data[0].attributes.carbohydrates
  const nutraceutic_banner = nutraceutic.data[0].attributes.banner.data.attributes.url  
  const nutraceutic_made_for_bolivia = nutraceutic.data[0].attributes.made_for_bolivia  
  const nutraceutic_base_weight = nutraceutic.data[0].attributes.nutritional_base_weight  

  return (
    <div>
      <div className="lg:static bg-no-repeat bg-cover bg-center lg:h-[600px]"
      style={{ backgroundImage: `url(${assetsUrl}${nutraceutic_banner})` }}
      >
        <div className="bg-gradient-to-r from-white/10 to-white/40 h-[600px]"></div>
      </div>
      <div className="-mt-[600px]">
        <div className="">
          <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-6xl">
            <div className="static bottom-0 left-0 ">
              <div>
                <div className="p-4 mt-10 z-50">
                  <a href="/" className="hover:text-pink-700 font-bold">
                  {t('nutraceutics:inicio_miga')}
                  </a>{' '}
                  /{' '}
                  <a href="../nutraceutics" className="hover:text-pink-700 font-bold">
                  {t('nutraceutics:nutraceuticos_miga')}
                  </a>{' '}
                  / {nutraceutic_title}
                </div>
              </div>
              <div className="sticky top-12">
                <img
                  className="mx-auto hover:rotate-12 duration-500 max-h-[600px] mt-20"
                  src={`${assetsUrl}${nutraceutic_image}`}
                />
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                  viewport={{ margin: '-200px' }}
                >
                  <div className="grid grid-cols-2 mx-auto pt-10 place-items-center max-w-sm -mt-20">
                    
                    <div className="p-4">
                      <div>
                        <img
                          className="max-h-12 max-w-12 mx-auto "
                          src="/static/images/productos/receta-rosa.png"
                        />
                      </div>
                      <div className="text-center font-bold pt-3 text-gris">{t('nutraceutics:nutraceutico')}</div>
                    </div>
                    <div className="p-4 ">
                      <div>
                        <img
                          className="max-h-12 max-w-12 mx-auto"
                          src="/static/images/productos/receta-rosa.png"
                        />
                      </div>
                      <div className="text-center font-bold pt-3 text-gris">{t('nutraceutics:venta_libre')}</div>
                    </div>
                    {nutraceutic_made_for_bolivia == true &&
                    <div className="p-4 col-span-2 border-t ">
                      <div className="mx-auto flex content-center">
                        <div className="grid grid-cols-4 place-items-center">
                          <div className="">
                            {' '}
                            <img
                              className="max-h-12 max-w-12"
                              src="/static/images/iconos/bolivia-bandera-circulo.png"
                            />
                          </div>
                          <div className="col-span-3">
                            <div>{t('nutraceutics:bolivia')}</div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    }
                    <div className="p-4 col-span-2 border-t ">
                      <div className="mx-auto flex content-center">
                        <div className="grid grid-cols-4 place-items-center">
                          <div className="">
                            {' '}
                            <img
                              className="max-h-16 max-w-16"
                              src="/static/images/productos/mensaje.png"
                            />
                          </div>
                          <div className="col-span-3">
                            <div>{t('nutraceutics:pregunta')}</div>
                            <div>
                              <a href="../recursos/contacto#formulario" className="text-azul font-bold hover:text-rosa">
                              {t('nutraceutics:escribe')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              </div>
            </div>
            <div className='p-4'>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ margin: '-30px' }}
              >
                <div className='h-[500px]'>
                
                <div className="text-azul text-2xl lg:text-4xl lg:mt-[100px]  lg:leading-normal">
                  {nutraceutic_claim}
                </div>
                
                </div>
              </motion.div>
              {/* CAJA VALORES */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-180px' }}
              >
                <div className="py-5">
                <div className="text-rosa text-4xl lg:text-6xl lg:mt-[10px] uppercase ">{nutraceutic_title}</div>
                <div className="text-gray-900 text-xl leading-normal pt-5 pb-10 mb-[50px]">
                  {nutraceutic_short_description}
                </div>
                  <div className="text-azul text-4xl leading-normal  font-extrabold pb-5">
                  {t('nutraceutics:valores')} <span className="text-rosa">{t('nutraceutics:nutricionales')} </span>
                    
                  </div>
                  
                  <div className="grid grid-cols-3 lg:grid-cols-5">
                    {/* ------------ CIRCULO ENERGIA*/}        
                    <div>
                      <div className="text-rosa font-black text-center text-sm h-10">{t('nutraceutics:energia')}</div>
                      <div className="p-3 font-extrabold">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? nutraceutic_energy : 0
                            return (
                              <CircularProgressbarWithChildren
                                className="font-extrabold"
                                value={percentage}
                                styles={buildStyles({
                                  strokeLinecap: 'butt',
                                  textSize: '16px',
                                  pathTransitionDuration: 3,
                                  pathColor: `#B3227D`,
                                })}
                              >
                                <div className="text-lg font-black text-rosa">
                                  {nutraceutic_energy}%
                                </div>
                              </CircularProgressbarWithChildren>
                            )
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                     {/* ------------ CIRCULO PROTEINAS*/}        
                     <div>
                      <div className="text-blue-900 font-black text-center text-sm h-10">{t('nutraceutics:proteinas')}</div>
                      <div className="p-3 font-extrabold">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? nutraceutic_proteins : 0
                            return (
                              <CircularProgressbarWithChildren
                                className="font-extrabold"
                                value={percentage}
                                styles={buildStyles({
                                  strokeLinecap: 'butt',
                                  textSize: '16px',
                                  pathTransitionDuration: 3,
                                  pathColor: `rgb(30 58 138)`,
                                })}
                              >
                                <div className="text-lg font-black text-blue-900">
                                  {nutraceutic_proteins}%
                                </div>
                              </CircularProgressbarWithChildren>
                            )
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                     {/* ------------ CIRCULO GRASAS TOTALES*/}        
                     <div>
                      <div className="text-green-500 font-black text-center text-sm h-10">{t('nutraceutics:grasas')}</div>
                      <div className="p-3 font-extrabold">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? nutraceutic_total_fat : 0
                            return (
                              <CircularProgressbarWithChildren
                                className="font-extrabold"
                                value={percentage}
                                styles={buildStyles({
                                  strokeLinecap: 'butt',
                                  textSize: '16px',
                                  pathTransitionDuration: 3,
                                  pathColor: `rgb(34 197 94)`,
                                })}
                              >
                                <div className="text-lg font-black text-green-500">
                                  {nutraceutic_total_fat}%
                                </div>
                              </CircularProgressbarWithChildren>
                            )
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                     {/* ------------ CIRCULO COLESTEROL*/}        
                     <div>
                      <div className="text-sky-500 font-black text-center text-sm h-10">{t('nutraceutics:colesterol')}</div>
                      <div className="p-3 font-extrabold">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? nutraceutic_cholesterol : 0
                            return (
                              <CircularProgressbarWithChildren
                                className="font-extrabold"
                                value={percentage}
                                styles={buildStyles({
                                  strokeLinecap: 'butt',
                                  textSize: '16px',
                                  pathTransitionDuration: 3,
                                  pathColor: `rgb(14 165 233)`,
                                })}
                              >
                                <div className="text-lg font-black text-sky-500">
                                  {nutraceutic_cholesterol}%
                                </div>
                              </CircularProgressbarWithChildren>
                            )
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                    {/* ------------ CIRCULO CARBOHIDRATOS*/}        
                    <div>
                      <div className="text-orange-400 font-black text-center text-sm h-10">{t('nutraceutics:carbohidratos')}</div>
                      <div className="p-3 font-extrabold">
                        <VisibilitySensor>
                          {({ isVisible }) => {
                            const percentage = isVisible ? nutraceutic_carbohydrates : 0
                            return (
                              <CircularProgressbarWithChildren
                                className="font-extrabold"
                                value={percentage}
                                styles={buildStyles({
                                  strokeLinecap: 'butt',
                                  textSize: '16px',
                                  pathTransitionDuration: 3,
                                  pathColor: `rgb(251 146 60)`,
                                })}
                              >
                                <div className="text-lg font-black text-orange-400">
                                  {nutraceutic_carbohydrates}%
                                </div>
                              </CircularProgressbarWithChildren>
                            )
                          }}
                        </VisibilitySensor>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gris  leading-normal px-5 text-center font-bold pb-5">{t('nutraceutics:basado')} {nutraceutic_base_weight}{t('nutraceutics:de_producto')}</div>

                  <div className="text-lg text-gris  leading-normal ">
                    {nutraceutic_description}
                  </div>
                </div>
              </motion.div>
              {/* CAJA DESCRIPCIÓN */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                
                <div className="">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:descripcion_del')} <span className="text-rosa">{t('nutraceutics:producto')} </span>
                  </div>

                  <div className="text-lg text-gris  leading-normal ">
                    {nutraceutic_technical_description}
                  </div>
                </div>
              </motion.div>
              {/* 
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:ingredientes')} <span className="text-rosa">{t('nutraceutics:dosificacion')} </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">{nutraceutic_ingredients}</div>
                </div>
              </motion.div>
            */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA PREPARACION */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:preparacion')} <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">{nutraceutic_preparation}</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA DURACION */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:duracion')} <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">{nutraceutic_duration}</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA INDICACIONES */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:indicaciones')} <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">{nutraceutic_indications}</div>
                </div>
              </motion.div>
              
                {/* CAJA TABLA NUTRICIONAL */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                  {t('nutraceutics:tabla')} <span className="text-rosa">{t('nutraceutics:nutricional')} </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <img
                      className=" lg:max-w-[800px] "
                      src={`${assetsUrl}${nutraceutic_nutritional_table}`}
                    />
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
 
          <div className="p-4 absolute w-full mt-20 pointer-events-none">
            <div className="flex justify-center pb-10">
              <img className="" src="/static/images/logo-nutraceuticos-blanco.png" />
            </div>
            <div className="text-2xl text-center text-white font-extralight  ">
            {t('nutraceutics:sigmacorp_investiga')}
            </div>
            <div className=" text-4xl lg:text-8xl text-center text-white font-extrabold py-5">{t('nutraceutics:nutraceuticos_texto')}</div>
            <div className="text-2xl text-center text-white font-extralight ">
            {t('nutraceutics:tu_salud')}
            </div>
          </div>
      
        <HomeParticlesAnimation />
      </div>
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top pt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ margin: '-10px' }}
        >
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-azul font-bold text-6xl">{t('nutraceutics:tenemos')} </span>
              <span className="text-rosa font-bold text-6xl lowercase">{t('nutraceutics:nutraceuticos')}</span>
              <div className="pt-5 text-xl">
              {t('nutraceutics:mejores')}
              </div>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-20 pb-10"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container relative mb-10 mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-24 ">
        {products.data.map((product) => (
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
