import useTranslation from 'next-translate/useTranslation'

export default function ItemSocial({ item }) {
  const { t } = useTranslation()
  return (
    <div className="relative w-60 bg-white mx-2">
      <img className="" src={`/static/images/home/${item.img}.png`} />

      <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white left-2 top-40">
        {t(`home:${item.date}`)}
      </span>
      <div className=" p-4 h-auto w-full ">
        <p className="font-bold">{t(`home:${item.title}`)}</p>
        <p className="text-gray-500 text-sm">{t(`home:${item.sub_title}`)}</p>
        <p className="pb-0 text-xs underline font-semibold text-blue-800 ">{t('home:leer_mas')}</p>
      </div>
    </div>
  )
}
