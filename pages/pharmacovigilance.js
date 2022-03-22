import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export async function getStaticProps({ locale }) {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default function Maquila() {
  const { t } = useTranslation()
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
                  <div className="text-violeta">FARMACOVIGILANCIA</div>
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
      <div className="p-8 flex flex-col justify-center bg-white bg-no-repeat bg-right-top h-96">
        <div>
          <p className="text-pink-700 text-xl md:text-6xl font-extrabold text-center">
            Página en Construcción
          </p>
          <p className="text-violeta text-xl md:text-3xl font-extrabold text-center">
            Disponible muy pronto
          </p>
        </div>
     

       
      </div>
    

       
    </>
  )
}
