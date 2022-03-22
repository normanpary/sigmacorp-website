import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import LogoPlay from '/public/static/images/about/play.svg'

import useTranslation from 'next-translate/useTranslation'

const videos = [
  {
    img: '/static/images/about/about01.png',
    url: 'https://www.youtube.com/watch?v=QFmMNfbsi6k&t=8s',
    align: 'justify-end',
  },
  {
    img: '/static/images/about/responsabilidad.jpg',
    url: 'https://www.youtube.com/watch?v=aFbfiILZg8g',
    align: 'justify-center',
  },
]

function LightBox({ video }) {
  const { t } = useTranslation()
  const [toggler, setToggler] = useState(false)

  return (
    <div className={"flex " + videos[video].align +" w-full"}>
      <div className="relative">
        {video == 0 ? (
          <img className="h-full w-auto" src={videos[video].img} />
        ) : (
          <img className="" src={videos[video].img} />
        )}

        <button
          className="bg-pink-700 rounded-full pl-1 pr-4 py-1 absolute bottom-6 left-6 md:-left-6 flex flex-row items-center cursor-pointer"
          onClick={() => setToggler(!toggler)}
        >
          <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center border-2 border-gray-300">
            <LogoPlay />
          </div>
          <p className="text-white pl-3">{t('about:ver_video')}</p>
        </button>
      </div>
      <FsLightbox toggler={toggler} sources={[`${videos[video].url}`]} />
    </div>
  )
}

export default LightBox
