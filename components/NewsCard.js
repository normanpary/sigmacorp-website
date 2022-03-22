const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL
import Image from "next/image"

export default function NewsCard ({title,description,image}){

   console.log(image)
    return(



         <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg  mb-10">
               <Image width={500} height={200} layout="intrinsic"
                  src={`${assetsUrl}${image}`}
                  alt="image"
                  className="object-cover"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     {title}
                     </a>
                  </h3>
                  <p dangerouslySetInnerHTML={{__html:description}} class="text-base text-body-color leading-relaxed mb-7">
                     
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
    )
}