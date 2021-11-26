import useTranslation from 'next-translate/useTranslation'
export default function CarouselItem({ item }) {
  const { t } = useTranslation()
  return (
    <div className="relative ">
      <img src={item.image} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white" />
      <div className="absolute top-4 left-10 right-10 sm:p-6 md:top-8 md:left-16 lg:top-16">
        <p className="text-pink-700 text-xl font-extrabold sm:text-4xl md:text-5xl ">
          {item.title}
        </p>
        <p className="text-sm sm:py-2 sm:text-base md:text-xl">{item.sub_title}</p>
        <input
          className="bg-violeta text-white rounded-full sm:font-bold  sm:py-1 px-4"
          type="button"
          value={t('home:conocelos')}
        />
      </div>
    </div>
  )
}
