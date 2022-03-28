import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getProductDetails } from 'queries/queries'
import { useRouter } from 'next/router'

import  ProductCard  from '@/components/category/ProductCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'

import Link from 'next/dist/client/link'

const id="PRUEBA ID"

export async function getServerSideProps(context) {
  
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryProductDetails',context.locale,context.params.product], async () => getProductDetails(context.locale,context.params.product))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}



export default function Product() {


  const { t } = useTranslation()

  const router = useRouter()

  const { data: product, isSuccess, isLoading } = useQuery(['queryProductDetails',router.locale,router.query.product], async () => getProductDetails(router.locale,router.query.product))

  console.log(product)
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
  const category_name = product.data[0].attributes.pharmaceutics_category.data.attributes.name
  const category_slug = product.data[0].attributes.pharmaceutics_category.data.attributes.slug
  console.log (category_name)
  return (
    <>
     <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right pb-20">
     <div className="container mx-auto pt-16">
     <div className="mb-10">
            <a href="/" className="hover:text-pink-700 font-bold">
              Inicio
            </a>{' '}
            / <a href="../" className="hover:text-pink-700 font-bold">
              Farmaceuticos
            </a>{' '}/ {' '}
            <a className="hover:text-pink-700 font-bold">
            <Link  href={`../${category_slug}`}>{category_name}</Link>
            </a>{' '}/ {product.data[0].attributes.title}
          </div>  
     <div className="grid grid-cols-3 gap-4">
            <div> <img src={`${assetsUrl}${product.data[0].attributes.image.data.attributes.url}`}/> </div>
            <div className='col-span-2'>
              <div className="text-rosa text-3xl uppercase font-extrabold">
                {product.data[0].attributes.title}
              </div>
              <div className="w-1/4 h-0.5 bg-rosa xl:w-96 mt-2">
              
              </div>
              <div className='text-gris text-lg mt-10 mb-5 font-light'>
              {product.data[0].attributes.description}
              </div>
              <div className='text-gris text-lg mt-5  font-extrabold'>
              Accion terapeutica
              </div>
              <div className='text-gris text-lg mb-5 font-light'>
              {product.data[0].attributes.therapeutical_action}
              </div>
              <div className='text-gris text-lg mt-5  font-extrabold'>
              Composición
              </div>
              <div className='text-gris text-lg mb-5 font-light'>
              {product.data[0].attributes.composition}
              </div>
              <div className='text-gris text-lg mt-5  font-extrabold'>
              Composición
              </div>
              <div className='text-gris text-lg  mb-5 font-light'>
              {product.data[0].attributes.presentation}
              </div>
              </div>
        </div>
     </div>
     </div>
      

      
    </>
  )
}
