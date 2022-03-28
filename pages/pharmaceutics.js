import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'

import  CategoryCard  from '@/components/category/CategoryCard'

import { getPharmaceuticCategories } from 'queries/queries'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from 'react-query';

const id="PRUEBA ID"
const language ="es"


export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryCategories',context.locale,id], async () => getPharmaceuticCategories(context.locale,id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}



export default function Pharmaceutics() {
  const { t } = useTranslation()

  const router = useRouter()
  const { data: categories, isSuccess, isLoading } = useQuery(['queryCategories',router.locale,id], async () => getPharmaceuticCategories(router.locale,id))


  return (
    <>
      {/**BANNER */}
      <div className="bg-gris_claro bg-cover bg-center h-64">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-64">
          <motion.div
            initial={{ opacity: 1, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-16">
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">*&nbsp;</div>
                <div className="text-violeta">FARMACÉUTICOS</div>
              </div>
              <div className="">
                <a href="/" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / En Construcción
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      {/**Pharmacetuical categories */}
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8 py-12" >
            {isLoading && 
              <div>------------------LOADING ---------------</div>
            }
            {isSuccess && categories.data.map((category) => (
             <CategoryCard
             key = {category.attributes.slug}
             name = {category.attributes.name}
             slug = {category.attributes.slug}
             image = {category.attributes.image.data.attributes.url}
             icon = {category.attributes.icon.data.attributes.url}
             />
            
          ))}
        </div>
      </div>
    </>
  )
}
