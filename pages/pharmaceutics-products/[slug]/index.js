import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getPharmaceuticProducts } from 'queries/queries'
import { useRouter } from 'next/router'

import ProductCard from '@/components/category/ProductCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const id = 'PRUEBA ID'

export async function getServerSideProps(context) {
  console.log('-----------------------HOLAAAA SOY EL SERVIDOR------------------------')
  console.log(context.params.slug)

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['queryProducts', context.locale, context.params.slug],
    async () => getPharmaceuticProducts(context.locale, context.params.slug)
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
  console.log(router.query.slug)
  const { data: products, isSuccess, isLoading } = useQuery(
    ['queryProducts', router.locale, router.query.slug],
    async () => getPharmaceuticProducts(router.locale, router.query.slug)
  )

  //console.log(products)
  const categoryName = products.data[0].attributes.pharmaceutics_category.data.attributes.name  
  const icon = products.data[0].attributes.pharmaceutics_category.data.attributes.icon.data.attributes.url


  return (
    <>
      <div className="bg-[url('/static/images/bg-big-hexagon.png')]  bg-no-repeat">
        <div className="container mx-auto pt-16">
          <div className="flex flex-row font-extrabold text-5xl justify-between">
            <div className="flex flex-row">
              <div className="text-pink-700 ">*&nbsp;</div>
              <div className="text-violeta">
                {categoryName}
              </div>
            </div>
            <div className="float-right">
              <img className="max-h-20 max-w-20" src={`${assetsUrl}${icon}`} />
            </div>
          </div>
          <div className="">
            <a href="/" className="hover:text-pink-700 font-bold">
              Inicio
            </a>{' '}/{' '}
            <a href="/pharmaceutics" className="hover:text-pink-700 font-bold">
              Farmaceuticos
            </a>{' '}/ {categoryName}
          </div>
          <div className="grid grid-cols-3 gap-20 py-20">
            {isLoading && <div>------------------LOADING ---------------</div>}
            {isSuccess &&
              products.data.map((product) => (
                <ProductCard
                  title={product.attributes.title}
                  type_of_sale={product.attributes.type_of_sale.data.attributes.title}
                  slugProduct={product.attributes.slug}
                  image={product.attributes.image.data.attributes.url}
                  slugCategory={product.attributes.pharmaceutics_category.data.attributes.slug}
                  category={product.attributes.pharmaceutics_category.data.attributes.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
