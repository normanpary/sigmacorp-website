import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'

export default function Maquila() {
  const { t } = useTranslation()
  return (
    <>
      <div className="relative">
        <img src="/static/images/maquila/fondo.png" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white" />
        <div className="absolute top-4 left-8 md:top-8">
          <p className="text-pink-700 text-xl md:text-5xl  font-extrabold">
            {t('maquila:fabrica')}
          </p>
          <p className="text-violeta text-xl md:text-5xl font-extrabold">{t('maquila:nosotros')}</p>
          <p>{t('maquila:servicios')}</p>
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
