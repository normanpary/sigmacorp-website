import useTranslation from 'next-translate/useTranslation'

export default function ItemProposito({ index, item }) {
  const { t } = useTranslation()
  return (
    <div className="p-4 rounded-lg bg-violeta opacity-70">
      <div className="flex justify-start">
        <img className="w-10 h-auto" src={`/static/images/home/proposito.png`} />
      </div>
      <p className="py-2 text-white font-bold text-center">{t('home:nuestro_proposito')}</p>
      <p className="text-white text-xs">{t('home:nuestro_proposito_text')}</p>
    </div>
  )
}
