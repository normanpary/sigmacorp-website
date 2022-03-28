import Link from 'next/link'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const CategoryCard = ({ key, name, slug, image, icon }) => {
  return (
    
      <Link href={`pharmaceutics-products/${slug}`}>
        <a>
        <div className='mb-4 transition hover:-translate-y-2' >      
          <div
            className="h-80 bg-cover rounded-[40px]"
            style={{ backgroundImage: `url(${assetsUrl}${image})` }}
          >
            <div>
              <img className="max-h-20 max-w-20" src={`${assetsUrl}${icon}`} />
            </div>
            
          </div>
          <div className="py-5 text-center text-2xl text-azul font-black">{name}</div>
          </div>
        </a>
      </Link>
    
  )
}

export default CategoryCard
