import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getBiosecurityProducts } from 'queries/queries'
import { useRouter } from 'next/router'

import ProductBiosecurityCard from '@/components/category/ProductBiosecurityCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { Fragment } from 'react'

const id = 'PRUEBA ID'

export async function getServerSideProps(context) {
  console.log('-----------------------HOLAAAA SOY EL SERVIDOR------------------------')


  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['queryProducts', context.locale],
    async () => getBiosecurityProducts(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function ProductsList() {
  const { t } = useTranslation()
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
  const router = useRouter()
  console.log('**************************DESDE EL CLIENTE*********************')

  const { data: products, isSuccess, isLoading } = useQuery(
    ['queryProducts', router.locale],
    async () => getBiosecurityProducts(router.locale)
  )

  var categoria=""


  return (
    <>
      <div className="bg-[url('/static/images/bg-big-hexagon.png')]  bg-no-repeat">
        <div className="container mx-auto pt-16">
          <div className="flex flex-row font-extrabold text-5xl justify-between">
            <div className="flex flex-row">
              <div className="text-pink-700 ">*&nbsp;Productos de&nbsp;</div>
              <div className="text-violeta">
                Bioseguridad
              </div>
            </div>
            <div className="float-right">
              
            </div>
          </div>
          <div className="">
            <a href="/" className="hover:text-pink-700 font-bold">
              Inicio
            </a>{' '}/{' '}
            <a href="/bioseguridad" className="hover:text-pink-700 font-bold">
              Bioseguridad
            </a>{' '}/
          </div>
          <div className="grid grid-cols-3 gap-20 py-20">
            {isLoading && <div>------------------LOADING ---------------</div>}
            {isSuccess &&
              products.data.map((product,i) => (
                <Fragment>   
                {i===0
                ? 
                <div className="bg-[url('/static/images/hexagonos-small.png')]  bg-no-repeat bg-auto col-start-1 col-span-3 text-6xl font-black text-white bg-rosa rounded-2xl py-10 px-40">{product.attributes.biosecurity_category.data.attributes.title }</div>
                : products.data[i].attributes.biosecurity_category.data.attributes.title !== products.data[i-1].attributes.biosecurity_category.data.attributes.title && 
                <div className="bg-[url('/static/images/hexagonos-small.png')]  bg-no-repeat bg-auto col-start-1 col-span-3 text-6xl font-black text-white bg-rosa rounded-2xl py-10 px-40">{products.data[i].attributes.biosecurity_category.data.attributes.title }</div>
                
                }

                
                

                <ProductBiosecurityCard
                  title =         {product.attributes.title}
                  slugProduct=    {product.attributes.slug}
                  image =         {product.attributes.image.data.attributes.url}
                  slugCategory =  {product.attributes.biosecurity_category.data.attributes.slug}
                  
                />

                
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
