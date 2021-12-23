import useTranslation from 'next-translate/useTranslation'
export default function Formulario() {
  const { t } = useTranslation()
  return (
    <div className="mt-8 flex sm:justify-center">
      <form className="bg-gray-200 p-4 md:p-8 rounded-lg space-y-4 w-full md:w-2/3 ">
        <input
          type="text"
          className="w-full px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder={t('maquila:input_nombre')}
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="w-full  px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder={t('maquila:input_empresa')}
          />
          <input
            type="text"
            className="w-full  px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder={t('maquila:input_pais')}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="w-full  px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder={t('maquila:input_correo')}
          />
          <input
            type="text"
            className="w-full  px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder={t('maquila:input_telefono')}
          />
        </div>

        <input
          type="text"
          className="w-full px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder={t('maquila:input_asunto')}
        />
        <textarea
          rows="5"
          className="w-full resize-y px-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder={t('maquila:input_opcional')}
        />
        <div className="flex justify-center">
          <button className="bg-pink-700 rounded-full py-2 px-10 text-white font-bold">
            {t('maquila:button_enviar')}
          </button>
        </div>
      </form>
    </div>
  )
}
