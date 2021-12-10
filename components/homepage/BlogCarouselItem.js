import { URL_BASE } from '@/data/api/config'
import useTranslation from 'next-translate/useTranslation'

export default function BlogCarouselItem({ post }) {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center h-full">
      <div className="h-auto w-60 bg-white mx-2 rounded-md">
        <img className="h-40 w-60 rounded-t-md" src={`${URL_BASE}${post.IMAGE.url}`} />
        <div className="relative p-4 w-auto h-44">
          <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white -mt-7">
            {post.published_at}
          </span>
          <p className="font-bold line-clamp-2">{post.TITLE}</p>
          <p className="text-gray-500 text-sm line-clamp-3">{post.DESCRIPTION}</p>
          <p className="pb-0 pt-4 text-xs underline font-semibold text-blue-800 absolute bottom-0 mb-4">
            {t('home:leer_mas')}
          </p>
        </div>
      </div>
    </div>
  )
}
