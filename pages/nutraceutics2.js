import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import Script from 'next/script'
import HomeParticlesAnimation from '../components/HomeParticlesAnimation';



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
    
     <HomeParticlesAnimation />
     
    <div className="pointer-events-none absolute w-full top-1/3 transition-opacity duration-1000 ease-out opacity-100 ">
    <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn', delay:1 }}
             
            >
    <div className="px-[30%] flex justify-center pb-10"> 
      <img className="" src='/static/images/logo-sigmacorp.png'/>
    </div>
    <div className=' text-center  px-[30%]  text-6xl text-white font-black leading-normal'> 
      Nutracéuticos creados y producidos en Bolivia
    </div>
    <div className=' text-center  pt-10 px-[40%]  text-xl text-white  leading-normal'> 
      En SIGMA creamos y producimos nutraceuticos con nanotecnologia.
    </div>
    </motion.div>
    </div>
    
      {/**BANNER */}
      
      <div className="">
        <div className="">
          <div className="container mx-auto pt-16">
            <div className="">
              <a href="#" className="hover:text-pink-700 font-bold">
                Inicio
              </a>{' '}
              / Productos Farmacéuticos
            </div>
            <div className="font-extrabold text-6xl">
              <div className="text-pink-700 ">Productos</div>
              <div className="text-violeta">Nutracéuticos</div>
            </div>
          </div>
        </div>
      </div>
      {/*FIN BANNER*/}
      <div className="container mx-auto mt-[250px] mb-[150px] text-center">
        <div className="max-w-xl text-lg pt-5 text-center mx-auto">
          Sigma Nutracéuticos ofrece <strong>suplementos y complementos nutricionales </strong>para
          madres en etapa de gestación y lactancia, para bebés entre 6 meses para adelante así como
          para el adulto mayor. Sigma es pionero en el{' '}
          <strong>desarrollo de nanotecnología en Bolivia.</strong>
        </div>
      </div>

      {/**te gustaria cotizacion */}
      {/**<BlogCarousel posts={posts} />*/}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        viewport={{ margin: '-100px' }}
      >
        <div className="container relative mb-10 mx-auto  grid grid-cols-3 gap-24 ">
          

          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n01.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n02.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n03.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n04.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n05.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="">
                <img className="" src={'static/images/n06.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          


         
        </div>
      </motion.div>
      
    </>
  )
}