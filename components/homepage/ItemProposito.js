import useTranslation from 'next-translate/useTranslation'

export default function ItemProposito({ index, item }) {
  const { t } = useTranslation()
  return (
    <div className="p-8 rounded-lg bg-azul opacity-70 min-w-[300px]">
      <div className="flex justify-start">
        <img className="w-10 h-auto" src={`/static/images/home/proposito.png`} />
      </div>
      <p className="py-2 text-white font-bold ">{t('home:nuestro_proposito')}</p>
      <p className="text-white text-sm">{t('home:nuestro_proposito_text')}</p>
    </div>
  )
}
