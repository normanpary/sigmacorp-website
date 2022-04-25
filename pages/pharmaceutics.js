import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'
import Script from 'next/script'

import CategoryCard from '@/components/category/CategoryCard'

import { getPharmaceuticCategories } from 'queries/queries'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from 'react-query'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import useScript from 'hooks/useScript'

const id = 'PRUEBA ID'
const language = 'es'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryCategories', context.locale, id], async () =>
    getPharmaceuticCategories(context.locale, id)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Pharmaceutics() {
  

  const { t } = useTranslation()

  const router = useRouter()
  const { data: categories, isSuccess, isLoading } = useQuery(
    ['queryCategories', router.locale, id],
    async () => getPharmaceuticCategories(router.locale, id)
  )

  return (
    <>
      <Script src="/static/js/jquery/jquery.min.js"
      strategy='beforeInteractive'
      id='jsjquery'
      />
      <Script src="/static/js/cells-particles/script.js" 
      strategy='afterInteractive'
      id='cellparticles'
      />
      

      <div className="relative" id="cells">
        <div className="absolute w-full top-1/3">
          <div className="text-2xl text-center text-white font-extralight  ">
            Sigmacorp desarrolla y elabora farmacéuticos de alta calidad.
          </div>
          <div className="text-8xl text-center text-white font-extrabold py-5">FARMACÉUTICOS</div>
          <div className="text-2xl text-center text-white font-extralight ">
            Las enfermadades siguen evolucionando, nuestros productos tambíen.
          </div>
        </div>
      </div>

      {/**BANNER */}
      <div className="bg-gris_claro bg-cover bg-center">
        <div className="bg-gradient-to-r from-white/80 to-white/0 ">
          <div className="container mx-auto py-16 grid grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 1, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '0px', once: true}}
            >
              <div>
                <div className="">
                  <a href="/" className="hover:text-pink-700 font-bold">
                    Inicio
                  </a>{' '}
                  / Farmacéuticos
                </div>
                <div className="flex flex-row font-bold text-5xl leading-14">
                  <div className="text-violeta">
                    Todos los productos de Sigma estan desarrollados para sanarte y protegerte
                  </div>
                </div>
                <div className="max-w-2xl text-lg  py-5 ">
                  Durante más de <strong>45 años</strong>, Sigma Corp ha trabajado incansablemente
                  para <strong>desarrollar y brindar medicamentos</strong> de confianza que ayuden a
                  las personas a mejorar, sentirse mejor y a <strong>vivir mejor</strong>.
                </div>
              </div>
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 1, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                viewport={{ margin: '0px', once: true }}
              >
                <Slider
                  arrows={true}
                  autoplay={true}
                  fade={false}
                  speed={1000}
                  easing={true}
                  pauseOnFocus={false}
                  pauseOnHover={false}
                  adaptiveHeight={false}
                  variableWidth={false}
                  infinite={true}
                  autoplaySpeed={5000}
                  dots={true}
                  className="mx-auto"
                >
                  <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                    <img
                      className="w-[480px] mx-auto rounded-xl shadow-md"
                      src={'static/images/productos/farma00.jpg'}
                    />
                  </div>
                  <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                    <img
                      className="w-[480px] mx-auto rounded-xl shadow-md"
                      src={'static/images/productos/farma01.png'}
                    />
                  </div>
                  <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                    <img
                      className="w-[480px] mx-auto rounded-xl shadow-md"
                      src={'static/images/productos/farma02.jpg'}
                    />
                  </div>
                  <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                    <img
                      className="w-[480px] mx-auto rounded-xl shadow-md"
                      src={'static/images/productos/farma04.jpg'}
                    />
                  </div>
                </Slider>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/*FIN BANNER*/}
      <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-10px' }}
          >
        <div className="container mx-auto text-center py-10 ">
          <div className="font-extrabold text-6xl   text-violeta">Farmacéuticos de</div>
          <div className="flex justify-center pb-10">
            <img className="w-[480px]" src="/static/images/logo-sigma-transparente.png" />
          </div>

          <div className="text-xl">
            {' '}
            Navega por nuestros productos usando el buscador o seleccionando la dolencia.
          </div>
        </div>
      </motion.div>
      <div className="h-20 bg-violeta flex items-center">
        <div className="max-w-2xl mx-auto">
          <form action="#">
            <input
              className="bg-violeta text-white border-b-2 border-0 border-white placeholder-white"
              id="categoria"
              name="categoria"
              type="text"
              placeholder="Categoría"
            />
            <input
              className="ml-10 bg-violeta text-white border-b-2 border-0 border-white placeholder-white"
              id="producto"
              name="producto"
              type="text"
              placeholder="Producto"
            />
            <button
              className="bg-rosa text-white font-bold px-10 py-3 rounded-full ml-10"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      {/**Pharmacetuical categories */}
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8 py-12">
          {isLoading && <div>------------------LOADING ---------------</div>}
          {isSuccess &&
            categories.data.map((category) => (
              <CategoryCard
                key={category.attributes.slug}
                name={category.attributes.name}
                slug={category.attributes.slug}
                image={category.attributes.image.data.attributes.url}
                icon={category.attributes.icon.data.attributes.url}
              />
            ))}
        </div>
      </div>
      
    </>
  )
}
