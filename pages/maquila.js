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
      <div className="bg-[url('/static/images/maquila/fondo.png')] bg-cover bg-center h-64">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-64">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-16">
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">{t('maquila:fabrica')}&nbsp;</div>
                <div className="text-violeta">{t('maquila:nosotros')}</div>
              </div>
              <div className="">
                <a href="#" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Fabrica con Nosotros
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}
      <div class="relative group">
        <a
          href="#"
          class="no-underline md:text-blue-dark flex items-center py-4 border-b border-blue-dark group-hover:border-grey-light"
        >
          Settings&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </a>

        <div class="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-auto">
          <a href="#" class="px-4 py-2 block text-black hover:text-rosa">
            Manage Stores
          </a>
          <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">
            Manage Users
          </a>
          <hr class="border-t mx-2 border-grey-ligght" />
          <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">
            Example Nav
          </a>
        </div>
      </div>

      {/**te gustaria cotizacion */}
      <div className="p-8 flex flex-col justify-center bg-fondo_footer bg-no-repeat bg-right-top">
        <div>
          <p className="text-pink-700 text-xl md:text-3xl font-extrabold text-center">
            {t('maquila:te_gustaria')}
          </p>
          <p className="text-violeta text-xl md:text-3xl font-extrabold text-center">
            {t('maquila:datos')}
          </p>
        </div>
        {/**formulario */}

        <Formulario />
      </div>
      {/**nuestros beneficios */}
      <div className="mt-8 p-8 gap-y-8 bg-fondo bg-no-repeat bg-left-top">
        <div>
          <p className="text-pink-700 text-xl md:text-3xl font-extrabold">
            {t('maquila:nuestros')}
          </p>
          <p className="text-violeta text-xl md:text-3xl font-extrabold">
            {t('maquila:beneficios')}
          </p>
        </div>

        <div className="flex md:justify-center mt-8">
          <div className="grid gap-6 md:gap-x-32 md:gap-y-8 grid-cols-1 md:grid-cols-2 ">
            <div>
              <p className="text-lg">{t('maquila:certificacion')}</p>
              <p className="text-xs mt-4">'BPM, ISO 22000, FDA, RSE'</p>
            </div>

            <p>{t('maquila:informe')}</p>
            <p>{t('maquila:atencion')}</p>
            <p>{t('maquila:pedido')}</p>
            <p>{t('maquila:garantia')}</p>
            <p>{t('maquila:experiencia')}</p>
          </div>
        </div>
      </div>
      {/**red de distribucion */}
      <div className="flex flex-col bg-gray-200 p-8">
        <p className="text-pink-700 text-xl md:text-3xl font-extrabold">{t('maquila:red')}</p>
        <p className="text-violeta  text-xl md:text-3xl font-extrabold">
          {t('maquila:distribucion')}
        </p>

        <p className="mt-4 font-bold">{t('maquila:nos_permite')}</p>
        <p className="mt-8 text-lg md:text-2xl text-pink-700 font-extrabold">
          {t('maquila:control_calidad')}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <p>{t('maquila:c1')}</p>
          <p>{t('maquila:c2')}</p>
          <p>{t('maquila:c3')}</p>
          <p>{t('maquila:c4')}</p>
          <p>{t('maquila:c5')}</p>
          <p>{t('maquila:c6')}</p>
          <p>{t('maquila:c7')}</p>
          <p>{t('maquila:c8')}</p>
          <p>{t('maquila:c9')}</p>
        </div>
      </div>
    </>
  )
}
