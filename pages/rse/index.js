import { items_card } from '@/data/homepage'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import EventCard from '@/components/eventos/EventCard'
import { getRseEvents } from 'queries/queries'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryEvents', context.locale], async () =>
    getRseEvents(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Contacto({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { data: events, isSuccess, isLoading } = useQuery(
    ['queryEvents', router.locale],
    async () => getRseEvents(router.locale)
  )
  return (
    <>
      {/**BANNER */}
      <div className="bg-[url('/static/images/about/fondo.png')] bg-cover bg-center h-96">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-96">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-24">
              <div className=" font-extrabold text-6xl">
                <div className="text-pink-700 ">RESPONSABILIDAD&nbsp;</div>
                <div className="text-violeta">SOCIAL EMPRESARIAL</div>
              </div>
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Responsabilidad Social Empresarial
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}
      {/*COMERCIO JUSTO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto pt-14 grid grid-cols-3">
          <div className="p-10">
            <img className="" src={'static/images/rse/comercio-justo.png'} alt="Carousel" />
          </div>
          <div className="col-span-2 p-10">
            <div className=" font-extrabold text-6xl text-violeta">COMERCIO JUSTO</div>
            <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
              <p>
              Las prácticas de comercio justo implementadas por Sigma Corp. son aquellas que buscan garantizar una relación comercial justa y equitativa con los productores de nuestro país y países en desarrollo. Estas prácticas promueven la transparencia, la responsabilidad y la sostenibilidad en todas las etapas de la cadena de suministro, desde la producción hasta la venta al consumidor final. 
              </p>
              <p>
              Se enfoca en mejorar la calidad de vida de los productores y sus comunidades, fomentando el desarrollo sostenible y reduciendo la pobreza en países en desarrollo. 
              </p>
              <p>Además, también promueve la conciencia de los consumidores sobre las condiciones de producción de los productos que compran y su impacto en el mundo.</p>
              <p>Entre nuestras principales prácticas de comercio justo se encuentran:</p>
              <ul className='list-decimal ml-10 space-y-3'>
                <li>Pago de precios justos.</li>
                <li>Trabajo en condiciones seguras y dignas para los trabajadores.</li>
                <li>Protección del medio ambiente.</li>
                <li>
                Pago justo y transparente a los proveedores de materias primas Respeto por los derechos humanos y laborales.
                </li>
                <li>Promoción de la igualdad de género y el empoderamiento de las mujeres.</li>
                <li>Evaluación continua y mejora de nuestras prácticas. </li>
                <li>Participación en iniciativas de comercio justo. </li>
              </ul>
              <p>
              Nos comprometemos a trabajar de manera ética y responsable en todas las etapas de nuestra cadena de suministro para garantizar un comercio justo y sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMERCIO JUSTO*/}
      {/*PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto  pt-14 grid grid-cols-3">
          
          <div className="col-span-2 p-10">
          <div className=" font-extrabold text-6xl text-violeta">
            PAGO DE SALARIO JUSTO A TRABAJADORES
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            Sigma Corp. ha implementado políticas de pago de salario justo a trabajadores. Entre nuestras principales prácticas se encuentran:
            </p>
            <ul className='list-decimal ml-10 space-y-3'>
              <li>Pago justo y transparente. </li>
              <li>Evaluación periódica de los salarios.</li>
              <li>Respeto por los derechos laborales.</li>
              <li>Igualdad de oportunidades.</li>
              <li>Promoción de la formación y el desarrollo.</li>
              <li>Evaluación continua y mejora de nuestras prácticas.</li>
            </ul>
            <p>
            Nos comprometemos a trabajar de manera ética y responsable para garantizar un pago justo y adecuado a todos los trabajadores eventuales o a destajo de nuestra empresa, en línea con los principios de justicia social y equidad laboral.
            </p>
            </div>
          </div>
          <div className="p-10">
            <img className="" src={'static/images/rse/salario-justo.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      {/*CUIDADO DEL MEDIO AMBIENTE*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto pt-14 grid grid-cols-3">
          <div className="p-10">
            <img className="" src={'static/images/rse/medio-ambiente.png'} alt="Carousel" />
          </div>
          <div className="col-span-2 p-10">
          <div className=" font-extrabold text-6xl text-violeta">POLÍTICA AMBIENTAL</div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            La industria químico farmacéutica Sigma Corp., ha establecido e implementado en sus procesos, un sistema de gestión ambiental basado en los requisitos de la norma ISO 14001:2015.
            </p>
            <p>
            Sigma Corp., industria líder en el desarrollo y fabricación de medicamentos, cosméticos, dispositivos médicos y nutracéuticos, en los más de 40 años de trabajo ha ido desarrollando un entendimiento profundo del rubro y estableciendo una fuerte relación con los consumidores.
            </p>
            <p>
            Nuestra política ambiental define el compromiso de realización de nuestra actividad dentro de los parámetros de desarrollo sostenible, manteniendo el control y la gestión de los aspectos ambientales que produce, especialmente en aquellos más significativos. Así mismo, establece un marco común para la definición de los objetivos y la realización de las actividades que contribuyan a la mejora continua del sistema de gestión ambiental.
            </p>
            <p>
            Para cumplir con estos compromisos y alcanzar los objetivos establecidos, Sigma Corp. ha establecido los siguientes principios fundamentales:
            </p>
            <ul className='list-decimal ml-10 space-y-3'>
              <li>
              Asegurar la protección del medio ambiente, trabajando de forma respetuosa, previniendo la contaminación y minimizando los efectos ambientales producidos como consecuencia de la actividad que desarrolla la industria.
              </li>
              
              <li>
              Asegurar el cumplimiento de los requisitos legales ambientales aplicables y los
                requisitos voluntariamente asumidos por la industria.{' '}
              </li>
              
              <li>
              Mantener la sensibilización y concientización de todos nuestros empleados, fomentando la formación de respeto ambiental de los mismos y favoreciendo la participación activa, incluyendo las sugerencias de mejora propuestas por ellos con objetivo de fomentar la mejora continua.
              </li>
              <li>
              Definir objetivos y metas concretas y medibles dentro de un Plan de Manejo Ambiental, siendo revisable según su consideración una vez al año mediante el Informe Ambiental Anual.
              </li>
              <li>
              Realizar una evaluación periódica anual de los aspectos ambientales derivados de la actividad, a efectos de mantenimiento y mejora continua del sistema de gestión ambiental. 
              </li>
            </ul>
            <p>
            Todos los que integran Sigma Corp., asumen estos principios, y es nuestra responsabilidad llevarlos a la práctica.  </p>
              <p>Sigma Corp., impulsa la mejora ambiental y asigna los recursos necesarios para asegurar la exitosa implantación de esta política ambiental.</p>
            
            </div>
          </div>
        </div>
      </div>
      {/*FIN CUIDADO DEL MEDIO AMBIENTE*/}
      {/*COMPROMISO CONTRA LA DISCRIMINACION */}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto  pt-14 grid grid-cols-3">
          
          <div className="col-span-2 p-10">
          <div className=" font-extrabold text-6xl text-violeta">
          POLÍTICA Y COMPROMISO CONTRA LA DISCRIMINACION 
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            En Sigma Corp. creemos en la igualdad de oportunidades y nos comprometemos a proporcionar un ambiente de trabajo justo, respetuoso e inclusivo. Por lo tanto, nos comprometemos a:
            </p>
            
            <ul className='list-decimal ml-10 space-y-3'>
              <li>
              No discriminar a ningún empleado o solicitante de empleo por motivos de género, orientación sexual, edad, raza, color, religión, discapacidad, origen étnico o cualquier otra categoría protegida por las leyes aplicables.
              </li>
              <li>
              Proporcionar la formación y los recursos necesarios para fomentar un ambiente de trabajo inclusivo y respetuoso. Los gerentes y supervisores recibirán capacitación sobre cómo reconocer y prevenir la discriminación, y se espera que todos los empleados cumplan con esta política.
              </li>
              <li>
              Crear y mantener un ambiente de trabajo que valore la diversidad y la inclusión, y que respete los derechos y la dignidad de cada empleado. 
              </li>
            </ul>
            <p>
            Esta política de no discriminación es un reflejo de nuestro compromiso de crear un ambiente de trabajo justo y equitativo para todos.
            </p>
            </div>
          </div>
          <div className="p-10">
            <img className="" src={'static/images/rse/contra-discriminacion.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN COMPROMISO CONTRA LA DISCRIMINACION**/}
      {/*IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto pt-14 grid grid-cols-3">
          <div className="p-10">
            <img className="" src={'static/images/rse/manual-etica.png'} alt="Carousel" />
          </div>
          <div className="col-span-2 p-10">
          <div className=" font-extrabold text-6xl text-violeta">
          IMPLEMENTACIÓN DE MANUAL DE ÉTICA, CONDUCTA Y BUEN GOBIERNO
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            El Manual de Ética, Conducta y Buen Gobierno, describe las responsabilidades que tienen los empleados y la alta dirección en el cumplimiento de las normas, leyes y reglamentaciones de Sigma Corp. Estas normas de conducta se aplican a todos los empleados y son parte integral dentro de la relación laboral de los empleados. 
            </p>
            <p>
            Sigma Corp. entiende que el ambiente de trabajo puede tener un impacto significativo en la salud y el bienestar de los empleados. Un ambiente de trabajo favorable puede mejorar el rendimiento y la motivación de los empleados, mientras que un ambiente de trabajo desfavorable puede generar estrés, fatiga y enfermedades relacionadas con el trabajo. Por esta razón, la empresa se esfuerza por crear un ambiente saludable, seguro y productivo para sus empleados. Que incluye medidas como la mejora de las condiciones físicas del espacio de trabajo, la promoción de relaciones interpersonales saludables y la implementación de políticas y prácticas laborales que fomenten el bienestar y la satisfacción laboral de los empleados. Tener empleados satisfechos es una de las prioridades del departamento de recursos humanos, ya que, al tener empleados felices, se consigue un alto rendimiento y mejores resultados. Cuando se le da importancia a lo que los empleados sienten o piensan y valoran sus aportaciones, de esta forma se consigue que la cadena de trabajo se vaya fortaleciendo y que el personal se esfuerce al máximo para lograr los objetivos de la organización. 
            </p>
            

            <p>
            En Sigma Corp. se cultivan las relaciones duraderas, ya que las personas, que son nuestros recursos, son nuestro bien más valioso. Esta fidelidad es el resultado del incentivo al desarrollo de talentos, a la calidad de vida y a la valorización de los equipos. Con este objetivo, Sigma Corp. promueve constantemente la calificación y el desarrollo personal y profesional de los empleados. Se trata de cursos de liderazgo, comportamiento, técnicos, programas de formación profesional, entre otras iniciativas.
            </p>
            <p>
            En las promociones de cargos, los empleados participan en selecciones en las cuales son evaluados mediante criterios claros e igualitarios en el sistema de calificación del personal. 

            </p>
            <p>
            En Sigma Corp. se tiene una política contra la explotación laboral. Cualquier empleado que permanezca trabajando en horarios extraordinarios, recibirá el pago correspondiente por las horas extraordinarias trabajadas. Sigma Corp. no emplea ni utiliza como recurso laboral a menores de edad.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      {/*COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto  pt-14 grid grid-cols-3">
          
          <div className="col-span-2 p-10">
          <div className=" font-extrabold text-6xl text-violeta">
            COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <strong>COMPROMISO DE LA INSTITUCIÓN PARA CON LOS TRABAJADORES:</strong>
            <ul className='list-disc ml-10 space-y-3'>
              <li>
              Promover el trabajo en condiciones justas y dignas para todos los trabajadores. 
              </li>
              <li>
              Velar por la protección de la intimidad, honra, salud mental y libertad de las personas en el trabajo.
              </li>
              <li>
              Promover un ambiente laboral positivo y armónico para todos.
              </li>
              <li>
              Tratar sin discriminación (de raza, religión, preferencia sexual o nacionalidad) a los trabajadores de la Institución.
              </li>
              <li>Respetar y promover las buenas relaciones entre todos, no fomentar labor a desempeñar.

              </li>
              <li>
              Mantener informados a los empleados sobre actualizaciones de software, y cualquier otra necesaria para el desarrollo institucional.
              </li>
              <li>
              Pagar oportunamente el salario, las prestaciones sociales y auxilios según lo expuesto en la ley.
              </li>
              <li>
              Realizar actividades de Bienestar Laboral.
              </li>
              <li>
              Utilizar los horarios establecidos y respetar el horario de descanso.
              </li>

            </ul>

            <strong>COMPROMISOS DE LOS TRABAJADORES PARA CON LA INSTITUCIÓN:</strong>
            <ul className='list-disc ml-10 space-y-3'>
              <li>
              Ser prudente en el lenguaje y en la manera de comportarse durante el ejercicio de las funciones.
              </li>
              <li>
              Mantener una adecuada presentación personal durante la jornada laboral. 
              </li>
              <li>
              Ser puntuales al asistir a los compromisos relacionados con el cargo y en los horarios establecidos.
              </li>
              <li>
              Respetar el Reglamento Interno de Trabajo.
              </li>
              <li>
              Realizar las actividades con responsabilidad y bajo los valores institucionales.
              </li>
              <li>
              Respetar, reservar y guardar la información confidencial a la que tenga acceso.
               </li>
              <li>
              Tener presente que se deben utilizar las oficinas, sistemas de información, elementos de trabajo y uso de internet, únicamente para el desempeño de las funciones.
              </li>
              <li>
              No divulgar información privada de la Institución a entes externos o a empleados cuyo cargo no requiera del conocimiento de esta.
              </li>
              <li>
              Responder oportuna y debidamente las llamadas telefónicas o mensajes electrónicos.
              </li>
              <li>
              Salvaguardar la información que sea recolectada y dar trámite oportuno a las quejas relacionadas con el acoso laboral.
              </li>
              <li>
              No instalar software ilegal en los equipos de la Institución.
              </li>
            <li>
            Utilizar correctamente los usuarios y contraseñas, y mantener confidencialidad de estas.
            </li>
            
              <li>
              Ser dinámicos y participativos en las actividades realizadas por la institución.
              </li>
              <li>
              Almacenar únicamente información de propiedad de la Institución, en los servidores y en los computadores personales.
              </li>
              <li>
              Utilizar responsablemente los equipos, elementos de oficina, archivos y registros, solo para el desempeño de sus funciones.
              </li>

            </ul>
            </div>
          </div>
          <div className="p-10">
            <img className="" src={'static/images/rse/trabajadores.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14">
        
            
        
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="font-extrabold text-gray-500 text-center text-lg">
             
             Noticias de impacto
       
         </div>
            <div className="flex justify-center mt-4 pb-10">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                SIGMA
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                RESPONSABILIDAD SOCIAL
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div></div>
          </motion.div>
          <div className="container relative mb-10 mx-auto  grid grid-cols-3 gap-24 ">
            {isSuccess &&
              events.data.map((event) => (
                <EventCard
                  title={event.attributes.title}
                  date={event.attributes.date}
                  description={event.attributes.description}
                  main_image={event.attributes.main_image.data.attributes.url}
                  slug={event.attributes.slug}
                  path="rse"
                />
              ))}
          </div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
    </>
  )
}
