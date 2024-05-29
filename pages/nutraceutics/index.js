import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'

import Script from 'next/script'

import { dehydrate, QueryClient, useQuery } from 'react-query'

import Link from 'next/dist/client/link'
import { getNutraceuticsAndCategories } from 'queries/queries'
import { useRouter } from 'next/router'
import NutraceuticCard from '@/components/category/NutraceuticCard'

import useScript from 'hooks/useScript'
import { Fragment } from 'react'
import { useState } from 'react'



export async function getServerSideProps(context) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['queryProducts', context.locale], async () =>
    getNutraceuticsAndCategories(context.locale)
  )
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default function Nutraceuticindex() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
  const { t } = useTranslation()
  const router = useRouter()
  console.log('**************************DESDE EL CLIENTE*********************')

  const { data: products, isSuccess, isLoading } = useQuery(
    ['queryProducts', router.locale],
    async () => getNutraceuticsAndCategories(router.locale)
  )
  const [isHovered, setIsHovered] = useState(Array(products.length).fill(false));
console.log(products)
  return (
    <div className="overflow-hidden bg-white">
      {/*HERO SECTION WITH VIDEO BACKGROUND VIDEO */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-30 filter grayscale brightness-150"
        >
          <source src="/static/videos/sigma-main-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 "></div>
        <div className="relative h-full flex items-center justify-center ">
          <div className="p-4 lg:container lg mx-auto text-center pb-[50px]">
            <div className="flex justify-center pb-5">
              <img
                className="w-[280px] lg:w-[480px] pb-5"
                src="/static/images/logo-nutraceuticos.png"
              />
            </div>
            <div className="font-extrabold  text-4xl lg:text-6xl">
              <div className="text-pink-700 ">{t('nutraceutics:salud')}</div>
              <div className="text-violeta">{t('nutraceutics:etapa')}</div>
            </div>
            <div className="lg:max-w-3xl text-lg pt-5 text-center mx-auto">
              {t('nutraceutics:suplementos_complementos_nutricionales')}
            </div>
            <div>
              <a href="#productos">
                <button className="mt-10 bg-violeta hover:bg-indigo-800 text-white py-2 px-10 rounded-full lg:text-xl text-xl">
                  {t('nutraceutics:explora')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*CULTURA ORGANIZACIONAL*/}
      <div className=" bg-cover bg-center" id="productos">
        <div className="bg-hexagon bg-no-repeat">
          <div className="container mx-auto py-14 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="justify-center" >
                <div className="pl-8 pr-8">
                  <p className="text-4xl md:text-6xl text-violeta font-extrabold text-center">
                    {t('nutraceutics:nuestros_productos')}
                  </p>
                </div>
                <div className="lg:max-w-3xl text-lg pt-5 text-center mx-auto">
                  {t('nutraceutics:nuestros_productos_descripcion')}
                </div>

                <div className="p-10">
                  <img className="mx-auto" src="/static/images/flecha.png" />
                </div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </div>
      {/*FIN CULTURA ORGANIZACIONAL*/}
      {/**te gustaria cotizacion */}
      {/**<BlogCarousel posts={posts} />*/}

      {/*CATEGORIAS DE PRODUCTOS*/}
      <div className="gap-20 ">
        {isLoading && <div>------------------LOADING ---------------</div>}
        {isSuccess &&
          products.data.map((product, i) => (
            <Fragment key={i}>
              {i === 0 ||
              products.data[i].attributes.nutraceutics_category.data.attributes.title !==
                products.data[i - 1].attributes.nutraceutics_category.data.attributes.title ? (
                <div
                  className="bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 lg:p-10 lg:py-10 lg:px-40"
                  style={{
                    backgroundImage: `url(${assetsUrl}${product.attributes.nutraceutics_category.data.attributes.image.data.attributes.url})`,
                  }}
                >
                  <div className="uppercase text-white font-extrabold text-4xl lg:text-6xl col-start-1 lg:col-span-3 ">
                    {product.attributes.nutraceutics_category.data.attributes.title}
                  </div>
                  <div className="text-white font-bold text-2xl col-start-1 lg:col-span-2 ">
                    {product.attributes.nutraceutics_category.data.attributes.description}
                  </div>
                  <div></div>
                  {products.data.map((innerProduct, innerIndex) => (
                    products.data[i].attributes.nutraceutics_category.data.attributes.title ===
                    innerProduct.attributes.nutraceutics_category.data.attributes.title ? (
                      <Link href={{
                        pathname: '/nutraceutics/'+innerProduct.attributes.slug,
                  
                      }} className=''>
                    <div className='min-h-[500px] group bg-white bg-opacity-50 p-10 rounded-lg puntero cursor-pointer transition-all  duration-500 hover:-translate-y-1  hover:bg-white ' data-cursortext="<div class='cursor-icono'>+</div>"
                    key={innerIndex}
                    data-cursortext="<div class='cursor-icono'>+</div>"
                    onMouseEnter={() => setIsHovered(prevState => {
                      const newState = [...prevState];
                      newState[innerIndex] = true;
                      return newState;
                    })}
                    onMouseLeave={() => setIsHovered(prevState => {
                      const newState = [...prevState];
                      newState[innerIndex] = false;
                      return newState;
                    })}

                    >
                       {isHovered[innerIndex] ? (
      <div className='video-container rounded-lg overflow-hidden '>
        <video autoPlay loop muted preload="auto" className='absolute top-0 left-0 w-full h-full object-cover rounded-lg bg-top' style={{ mask: 'radial-gradient(circle, white 100%, black 100%)', objectPosition: 'top'  }}>
          <source src={assetsUrl+innerProduct.attributes.video.data.attributes.url}  type='video/mp4' />
        </video>
        <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 rounded-lg'></div>
        <div className='absolute bottom-0 left-0 w-full flex items-bottom justify-center flex flex-col items-center'>
          <div className='uppercase text-violeta font-bold text-lg p-5 text-center'>{innerProduct.attributes.title}</div>
          <div className='pb-10'>
              <a href="#productos">
                <button className="bg-violeta hover:bg-indigo-800 text-white py-2 px-10 rounded-full lg:text-xl text-xl">
                  {t('nutraceutics:ver_producto')}
                </button>
              </a>
            </div>
          </div>
      </div>
      
    ) : (
      <>
                      <img src={assetsUrl+innerProduct.attributes.image.data.attributes.url} className='mx-auto d-block max-h-60'/>
                      <div className='uppercase text-violeta font-bold text-lg'>{innerProduct.attributes.title}</div>
                      <div className='text-gray-600 line-clamp-6'>{innerProduct.attributes.short_description}</div>
                      </>
                       )}
                    </div>
                    </Link>
                  ) : null
                  ))}
                </div>
              ) : null}
            </Fragment>
          ))}
      </div>

      {/*CULTURA ORGANIZACIONAL*/}
      <div className=" bg-cover bg-center">
        <div className="bg-hexagon bg-no-repeat">
          <div className="container mx-auto py-14 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
              <div className="justify-center">
                <div className="pl-8 pr-8">
                  <p className="text-xl md:text-6xl text-violeta font-extrabold text-center">
                    {t('nutraceutics:quienes_somos')}
                  </p>
                </div>
                <div className="text-gray-500 lg:max-w-3xl text-lg pt-5 text-center mx-auto">
                  {t('nutraceutics:quienes_somos_descripcion')}
                </div>

                <div className="lg:flex">
                  <div className="flex-1 p-10">
                    <div className="flex flex-col">
                      <div className="border-b border-gray-400 p-2">
                        <img
                          className="w-[280px] lg:w-[480px] pb-5"
                          src="/static/images/logo-nutraceuticos.png"
                        />
                      </div>
                      <div className="border-b border-gray-400 p-3 flex items-center">
                        <img
                          src="/static/icons/icono_nanotecnologia.png"
                          alt="description_of_the_icon"
                          className="w-10 mr-4"
                        />
                        <p className="text-left text-lg font-bold text-violeta">
                          {t('nutraceutics:pioneros')}
                        </p>
                      </div>
                      <div className="border-b border-gray-400 p-3 flex items-center">
                        <img
                          src="/static/icons/icono_elaboracion.png"
                          alt="description_of_the_icon"
                          className="w-10 mr-4"
                        />
                        <p className="text-left text-lg font-bold text-violeta">
                          {t('nutraceutics:elaboracion')}
                        </p>
                      </div>
                      <div className="border-b border-gray-400 p-3 flex items-center">
                        <img
                          src="/static/icons/icono_distribucion.png"
                          alt="description_of_the_icon"
                          className="w-10 mr-4"
                        />
                        <p className="text-left text-lg font-bold text-violeta">
                          {t('nutraceutics:red')}
                        </p>
                      </div>
                      <div className="border-b border-gray-400 p-3 flex items-center">
                        <img
                          src="/static/icons/icono_maquila.png"
                          alt="description_of_the_icon"
                          className="w-10 mr-4"
                        />
                        <p className="text-left text-lg font-bold text-violeta">
                          {t('nutraceutics:servicios')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-10 flex justify-center ">
                    <video autoPlay loop muted className="rounded-lg max-w-xs ">
                      <source src="/static/videos/oficina-sigma.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-1 p-10 ">
                    <p className="text-gray-500">{t('nutraceutics:cuidamos_descripcion')}</p>
                    <p className="text-xl font-bold mt-3">{t('nutraceutics:mision')}</p>
                    <p className="text-gray-500">{t('nutraceutics:mision_descripcion')}</p>
                    <p className="text-xl font-bold mt-3">{t('nutraceutics:vision')}</p>
                    <p className="text-gray-500">{t('nutraceutics:vision_descripcion')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </div>
      {/*FIN CULTURA ORGANIZACIONAL*/}
    </div>
  )
}
