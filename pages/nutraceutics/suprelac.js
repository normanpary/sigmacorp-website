import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { getProductDetails } from 'queries/queries'
import { getPharmaceuticProducts } from 'queries/queries'
import { useRouter } from 'next/router'
import Script from 'next/script'

import ProductCard from '@/components/category/ProductCard'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import HomeParticlesAnimation from '../../components/HomeParticlesAnimation'
import Link from 'next/dist/client/link'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Suprelac() {
  return (
    <div>
      <div className="static bg-[url('/static/images/temporal/embarazada.jpg')] bg-no-repeat bg-cover bg-bottom h-[600px]">
        <div className="bg-gradient-to-r from-white/0 to-white/40 h-[600px]"></div>
      </div>
      <div className="-mt-[600px]">
        <div className="">
          <div className=" container mx-auto grid grid-cols-2 max-w-6xl">
            <div className="static bottom-0 left-0 ">
              <div>
                <div className="mt-10 z-50">
                  <a href="/" className="hover:text-pink-700 font-bold">
                    Inicio
                  </a>{' '}
                  /{' '}
                  <a href="../nutraceutics" className="hover:text-pink-700 font-bold">
                    Nutracéuticos
                  </a>{' '}
                  / Suprelac
                </div>
              </div>
              <div className="sticky top-12">
                <img
                  className="mx-auto hover:rotate-12 duration-500 max-h-[600px] mt-20"
                  src="/static/images/temporal/suprelac-gestacion-recortado.png"
                />
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                  viewport={{ margin: '-200px' }}
                >
                  <div className="grid grid-cols-2 mx-auto pt-10 place-items-center max-w-sm -mt-20">
                    <div className="p-5">
                      <div>
                        <img
                          className="max-h-12 max-w-12 mx-auto "
                          src="/static/images/productos/receta-rosa.png"
                        />
                      </div>
                      <div className="text-center font-bold pt-3 text-gris">Nutraceutico</div>
                    </div>
                    <div className="p-5 ">
                      <div>
                        <img
                          className="max-h-12 max-w-12 mx-auto"
                          src="/static/images/productos/receta-rosa.png"
                        />
                      </div>
                      <div className="text-center font-bold pt-3 text-gris">Venta libre</div>
                    </div>

                    <div className="p-5 col-span-2 border-t ">
                      <div className="mx-auto flex content-center">
                        <div className="grid grid-cols-4 place-items-center">
                          <div className="">
                            {' '}
                            <img
                              className="max-h-16 max-w-16"
                              src="/static/images/productos/mensaje.png"
                            />
                          </div>
                          <div className="col-span-3">
                            <div>¿Tienes alguna pregunta de este producto?</div>
                            <div>
                              <a href="#" className="text-azul font-bold hover:text-rosa">
                                Escribe a Sigma Corp.
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ margin: '-30px' }}
              >
                <div className="text-rosa text-6xl mt-[200px] ">SUPRELAC GESTACIÓN Y LACTANCIA</div>
                <div className="text-gray-900 text-xl leading-normal pt-10 mb-[100px]">
                  Es un suplemento nutricional hiperproteico{' '}
                  <strong>para mujeres embarazadas y en etapa de lactancia.</strong> Excelente
                  fuente de ácido fólico. Aporta el 83% del valor diario de hierro. 20 vitaminas y
                  Minerales.
                </div>
              </motion.div>
              {/* CAJA VALORES */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-120px' }}
              >
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold pb-5">
                    VALORES <span className="text-rosa">NUTRICIONALES </span>
                  </div>
                  <div className="text-rosa text-6xl ">
                    <img
                      className="mx-auto max-w-[600px] "
                      src="/static/images/temporal/circular-data.png"
                    />
                  </div>
                  <div className="text-lg text-gris  leading-normal ">
                    <p className="pb-3">
                      Aporta energía, proteínas, grasas polinsaturadas con un alto contenido de
                      vitaminas y minerales, de alta biodisponibilidad.
                    </p>{' '}
                    <p className="pb-3">
                      <strong>Ayuda a la madre a:</strong> Equilibrar el peso materno, prevenir
                      anemia nutricional, mejorar el desarrollo y crecimiento del bebe, la formación
                      del calostro, al crecimiento de los huesos y dientes del infante, preparar el
                      organismo materno para un mejor parto. del infante, preparar el organismo
                      materno para un mejor parto.
                    </p>
                    <p className="pb-3">
                      <strong>Sabores: </strong> Horchata, Vainilla, Dulce de Leche y Caramelo.{' '}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA DESCRIPCION */}
                <div className="">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    DESCRIPCION DEL <span className="text-rosa">PRODUCTO </span>
                  </div>

                  <div className="text-lg text-gris  leading-normal ">
                    <p className="pb-3">Polvo para reconstituir vía oral.</p>
                    <p className="pb-3">
                      <strong>Presentación: </strong> Bolsas Trilaminadas de 1000 g con y sin cajas.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA INGREDIENTES */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    INGREDIENTES / <span className="text-rosa">DOSIFICACIÓN </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <p className="pb-3">
                      <strong>Ingredientes:</strong> Arroz, maíz, quinua, amaranto, concentrado
                      proteico de soya, albúmina, suero de leche, grasa vegetal, maltodextrina,
                      glucosa, fructosa, vitamina A, vitamina D, vitamina E, tiamina, riboflavina,
                      niacinamida, piridoxina, vitamina C microencapsulada, ácido fólico, biotina,
                      cianocobalamina, hierro (fumarato ferroso microencapsulado), zinc, calcio
                      (micronizado), fósforo, yodo, cloruro de sodio, saborizantes y emulsificantes
                      permitidos.
                    </p>
                    <p className="">
                      <strong>Dosificación: </strong> Como Suplemento: 3 dosis diarias de 33 gramos
                      (99 g) cada una y como complemento consumir una dosis diaria (33 g).
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA PREPARACION */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    PREPARACIÓN <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <p className="pb-3">
                      A un vaso de 200 ml agregue una cuchara dosificadora (33g) de Suprelac®
                      Adicione una pequeña cantidad de leche fluida, agua o jugo de frutas. Batir
                      hasta que se disuelva.{' '}
                    </p>
                    <p className="pb-3">
                      Llene el vaso con el líquido utilizado, mezclando constantemente. Disfrute
                      Suprelac®, tibio o frio a cualquier hora del día.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA DURACION */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    DURACIÓN <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <p className="pb-3">
                      18 meses a partir de la fecha de fabricación. Una vez abierto el envase,
                      consumir el producto dentro de los 60 días.
                    </p>
                    <p className="pb-3">
                      Mantener la bolsa bien cerrada en un lugar fresco y seco a una temperatura no
                      mayor a 30ºC.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA INDICACIONES */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    INDICACIONES <span className="text-rosa"> </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <p className="pb-3">
                      <strong>Suprelac®</strong> es un suplemento calórico, proteico, vitamínico y
                      mineral para consumo durante las etapas de gestación y lactancia. Seguir las
                      instrucciones de su médico respetando la dosis durante el embarazo y
                      lactancia. No interrumpir el consumo sin conocimiento de su médico.
                    </p>
                    <p className="pb-3">
                      <strong>Contraindicaciones: </strong>Está contraindicado en casos
                      excepcionales de hipersensibilidad previa a cualquier componente de la
                      fórmula. Está contraindicado en casos de anemia perniciosa, debido a que el
                      ácido fólico puede enmascarar los síntomas.
                    </p>
                    <p className="pb-3">
                      <strong>Reacciones Adversas: </strong>Puede presentarse ligera coloración de
                      la orina debido a la vitamina B2. Así mismo podrían presentarse trastornos
                      gastrointestinales como náuseas, vómitos, molestias epigástricas, cefalea,
                      causados especialmente por la presencia de hierro en el preparado.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ margin: '-10px' }}
              >
                {/* CAJA TABLA NUTRICIONAL */}
                <div className="py-5">
                  <div className="text-azul text-4xl leading-normal  font-extrabold ">
                    TABLA <span className="text-rosa">NUTRICIONAL </span>
                  </div>

                  <div className="text-lg text-gris leading-normal ">
                    <img className=" max-w-[800px] " src="/static/images/temporal/tabla.png" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="relative ">
      <motion.div
            initial={{ opacity: 0,}}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1, ease: 'easeIn' }}
            
          >
        <div className="absolute w-full top-1/4 pointer-events-none">
          <div className="flex justify-center pb-10">
            <img className="" src="/static/images/logo-sigmacorp.png" />
          </div>
          <div className="text-2xl text-center text-white font-extralight  ">
            Sigmacorp investiga, desarrolla y comercializa nutracéuticos de alta calidad.
          </div>
          <div className="text-8xl text-center text-white font-extrabold py-5">NUTRACÉUTICOS</div>
          <div className="text-2xl text-center text-white font-extralight ">
            Los pacientes son el centro de lo que hacemos
          </div>
        </div>
        </motion.div>
        <HomeParticlesAnimation />
        
      </div>
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top pt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ margin: '-10px' }}
        >
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-azul font-bold text-6xl">Tenemos mas productos </span>
              <span className="text-rosa font-bold text-6xl lowercase">nutracéuticos</span>
              <div className="pt-5 text-xl">
                Los mejores productos farmacéuticos para tu bienestar
              </div>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-20 pb-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        viewport={{ margin: '-100px' }}
      >
        <div className="container relative mb-10 mx-auto  grid grid-cols-3 gap-24 pb-20">
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <Link href={`../nutraceutics/suprelac`}>
                  <img className="" src={'/static/images/n01.png'} alt="Carousel" />
                </Link>
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <img className="" src={'/static/images/n02.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
              <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <img className="" src={'/static/images/n03.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
            <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <img className="" src={'/static/images/n04.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
            <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <img className="" src={'/static/images/n05.png'} alt="Carousel" />
              </div>
            </div>
          </div>
          <div className="transition hover:-translate-y-3 ">
            <div className="h-auto  bg-white  rounded-md">
            <div className="puntero" data-cursortext="<div class='cursor-icono'>+</div>">
                <img className="" src={'/static/images/n06.png'} alt="Carousel" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
