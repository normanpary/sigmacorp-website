import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'
import Script from 'next/script'


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
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <Script src="/static/js/cells-particles/script.js" />

      <div className="relative" id="cells">
          <div className='absolute w-full top-1/3'>
          <div className='text-2xl text-center text-white font-extralight  '>
              Sigmacorp desarrolla y elabora farmacéuticos de alta calidad.
           </div>
           <div className='text-8xl text-center text-white font-extrabold py-5'>
              FARMACÉUTICOS
           </div>
           <div className='text-2xl text-center text-white font-extralight '>
              Los pacientes son el centro de lo que hacemos
           </div>
            </div>
      </div>

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
            <div className="">
                <a href="/" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Farmacéuticos
              </div>
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">*&nbsp;</div>
                <div className="text-violeta">FARMACÉUTICOS</div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      <div className='h-20 bg-violeta flex items-center'>
        <div className='max-w-2xl mx-auto'>
      <form action="#">
      
      <input className="bg-violeta text-white border-b-2 border-0 border-white placeholder-white" id="categoria" name="categoria" type="text"  placeholder="Categoría" />
      <input className="ml-10 bg-violeta text-white border-b-2 border-0 border-white placeholder-white" id="producto" name="producto" type="text" placeholder="Producto"  />
      <button className="bg-rosa text-white font-bold px-10 py-3 rounded-full ml-10" type="submit">Buscar</button>
    </form>
    </div>
      </div>

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
