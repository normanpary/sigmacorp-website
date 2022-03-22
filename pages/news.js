import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'

import { getNoticias } from '../queries/queries'
import NewsCard from '@/components/NewsCard'

import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query';
/*
export async function getStaticProps({ locale }) {
  const noticiasprops = await getNoticias(locale)
  return { props: { noticiasprops } }
}
*/
const id="test id"
export async function getStaticProps({locale}) {
  const queryClient = new QueryClient()
 
  await queryClient.prefetchQuery('noticias', () => getNoticias(locale,id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}



export default function News() {
  const { t } = useTranslation()
  const router = useRouter()

  //const {data: noticias, isSuccess} = useQuery("noticias", async () => await getNoticias(router.locale))
  const {data: noticias} = useQuery("noticias", getNoticias(router.locale,id))

  console.log(noticias)

  //useEffect(() => { refetch() })

  return (
    <>
      {/**BANNER */}
      <div className="bg-gris_claro bg-cover bg-center h-64">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-64">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-16">
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">*&nbsp;</div>
                <div className="text-violeta">NOTICIAS</div>
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

      {/**te gustaria cotizacion */}

      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            {/*noticias.data.map((post) => (
              <NewsCard
                title={post.attributes.titulo}
                description={post.attributes.descripcion}
                image={post.attributes.imagen_principal.data.attributes.url}
              />
            ))*/
            noticias.map((post) => (
              <NewsCard
                title={post.titulo}
                description={post.descripcion}
                image={post.imagen_principal.url}
              />
            ))
            
            
            }
          </div>
        </div>
      </section>
    </>
  )
}
