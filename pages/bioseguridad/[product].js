import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getProductDetails } from 'queries/queries'
import { getPharmaceuticProducts } from 'queries/queries'
import { useRouter } from 'next/router'

import ProductCard from '@/components/category/ProductCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'

import Link from 'next/dist/client/link'

const id = 'PRUEBA ID'

export async function getServerSideProps(context) {

 

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['queryProductDetails', context.locale, context.params.product],
    async () => getProductDetails(context.locale, context.params.product)
  )
  console.log("-----------------productos--------------")
    console.log(context)


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

export default function Product() {
  const { t } = useTranslation()

  const router = useRouter()

  const { data: product, isSuccess, isLoading } = useQuery(
    ['queryProductDetails', router.locale, router.query.product],
    async () => getProductDetails(router.locale, router.query.product)
  )

  const { data: products, isSuccess2, isLoading2 } = useQuery(
    ['queryProducts', router.locale, router.query.slug],
    async () => getPharmaceuticProducts(router.locale, router.query.slug)
  )
  console.log(product)
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
  const category_name = product.data[0].attributes.pharmaceutics_category.data.attributes.name
  const category_slug = product.data[0].attributes.pharmaceutics_category.data.attributes.slug
  const category_icon =
    product.data[0].attributes.pharmaceutics_category.data.attributes.icon.data.attributes.url
  const category_type_of_sale = product.data[0].attributes.type_of_sale.data.attributes.title
  console.log(category_name)
  return (
    <div>
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top pb-20">
      

        <div className="container mx-auto pt-16 max-w-5xl">
          <div className="mb-10">
            <a href="/" className="hover:text-pink-700 font-bold">
              Inicio
            </a>{' '}
            /{' '}
            <a href="../" className="hover:text-pink-700 font-bold">
              Farmacéuticos
            </a>{' '}
            /{' '}
            <a className="hover:text-pink-700 font-bold">
              <Link href={`../${category_slug}`}>{category_name}</Link>
            </a>{' '}
            / {product.data[0].attributes.title}
          </div>
          <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            viewport={{ margin: '-10px' }}
          >
            <div className="">
              <div className="overflow-hidden">
                <img
                  className="hover:rotate-12 duration-500"
                  src={`${assetsUrl}${product.data[0].attributes.image.data.attributes.url}`}
                />
              </div>
              <div className="grid grid-cols-2 mx-auto pt-10 place-items-center">
                <div className="p-5">
                  <div>
                    <img
                      className="max-h-12 max-w-12 mx-auto "
                      src={`${assetsUrl}${category_icon}`}
                    />
                  </div>
                  <div className="text-center font-bold pt-3 text-gris">
                    <Link href={`../${category_slug}`}>{category_name}</Link>
                  </div>
                </div>
                <div className="p-5 ">
                  <div>
                    <img
                      className="max-h-12 max-w-12 mx-auto"
                      src="/static/images/productos/receta-rosa.png"
                    />
                  </div>
                  <div className="text-center font-bold pt-3 text-gris">
                    {category_type_of_sale}
                  </div>
                </div>

                <div className="p-5 col-span-2 border-t ">
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
                        <div>¿Tienes alguna pregunta de este producto?</div>
                        <div>
                          <a href="#" className="text-azul font-bold hover:text-rosa">
                            Escribe a Sigma Corp.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            viewport={{ margin: '-10px' }}
          >
            <div className="">
              <div className="text-rosa text-3xl uppercase font-extrabold">
                {product.data[0].attributes.title}
              </div>
              <div className="w-1/4 h-0.5 bg-rosa xl:w-96 mt-2"></div>
              <div className="text-gris text-lg mt-10 mb-5 font-light">
                {product.data[0].attributes.description}
              </div>
              <div className="text-gris text-xl mt-5  font-extrabold">Acción terapéutica</div>
              <div className="text-gris text-lg mb-5 font-light">
                {product.data[0].attributes.therapeutical_action}
              </div>
              <div className="text-gris text-xl mt-5  font-extrabold">Composición</div>
              <div className="text-gris text-lg mb-5 font-light">
                {product.data[0].attributes.composition}
              </div>
              <div className="text-gris text-xl mt-5  font-extrabold">Presentación</div>
              <div className="text-gris text-lg  mb-5 font-light">
                {product.data[0].attributes.presentation}
              </div>
            </div>
            </motion.div>
          </div>
        </div>
        
      </div>
      <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-10px' }}
          >
      <div className="container mx-auto">
     
        <div className="text-center">
          <span className="text-azul font-bold text-6xl">Tenemos mas productos </span>
          <span className="text-rosa font-bold text-6xl lowercase">{category_name}</span>
          <div className='pt-5 text-xl'>Los mejores productos farmacéuticos para tu bienestar</div>
        </div>

        <div>
        
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
      </motion.div>
    </div>
  )
}
