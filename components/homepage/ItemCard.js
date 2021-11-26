import useTranslation from 'next-translate/useTranslation'

export default function ItemCard({ index, item }) {
  const { t } = useTranslation()
  return (
    <div className="md:mt-6 md:z-10">
      <div className="p-4 md:p-4  sm:w-44 md:w-44 md:h-52 rounded-lg bg-blue-900 h-full md:hover:-mt-6 hover:bg-pink-700 ">
        <div className="flex justify-center">
          <img className="h-10 w-auto" src={`/static/images/home/${item.title}.png`} />
        </div>

        <p className="py-4 md:py-2 text-white font-bold text-center">
          {t(`home:${item.title.toLowerCase()}`)}
        </p>
        <p className="text-white text-xs text-center">
          {t(`home:${item.sub_title.toLowerCase()}`)}
        </p>
      </div>
    </div>
  )
}
