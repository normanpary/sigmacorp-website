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


  if(router.locale==="es"){
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
                Pago justo y transparente a los proveedores de materias primas. 
                </li>
                <li>Respeto por los derechos humanos y laborales.</li>
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
          POLÍTICA Y COMPROMISO CONTRA LA DISCRIMINACIÓN 
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
if(router.locale==="en"){
  return(
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
                <div className="text-pink-700 ">CORPORATE&nbsp;</div>
                <div className="text-violeta">SOCIAL RESPONSIBILITY</div>
              </div>
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                  Home
                </a>{' '}
                / Corporate Social Responsibility
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
            <div className=" font-extrabold text-6xl text-violeta">FAIR TRADE</div>
            <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
              <p>
              The fair trade practices implemented by Sigma Corp. are those that seek to guarantee a fair and equitable commercial relationship with the producers of our country and developing countries. These practices promote transparency, responsibility and sustainability at all stages of the supply chain, from production to sale to the final consumer.
              </p>
              <p>
              It focuses on improving the quality of life of producers and their communities, promoting sustainable development and reducing poverty in developing countries. 
              </p>
              <p>In addition, it also promotes consumer awareness of the production conditions of the products they buy and their impact on the world.</p>
              <p>Our core fair trade practices include:</p>
              <ul className='list-decimal ml-10 space-y-3'>
                <li>Payment of fair prices.</li>
                <li>Work in safe and decent conditions for workers.</li>
                <li>Environmental Protection.</li>
                <li>
                Fair and transparent payment to suppliers of raw materials.
                </li>
                <li>Respect for human and labor rights.</li>
                <li>Promotion of gender equality and the empowerment of women.</li>
                <li>Continuous evaluation and improvement of our practices.</li>
                <li>Involvement in fair trade initiatives</li>
              </ul>
              <p>
              We are committed to working ethically and responsibly at all stages of our supply chain to ensure fair and sustainable trade.
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
          FAIR WAGE PAYMENT TO WORKERS
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            Sigma Corp. has implemented fair wage payment policies for workers. Our main practices include:
            </p>
            <ul className='list-decimal ml-10 space-y-3'>
              <li>Fair and transparent payment. </li>
              <li>Periodic evaluation of salaries.</li>
              <li>Respect for labor rights.</li>
              <li>Equal opportunities.</li>
              <li>Promotion of training and development.</li>
              <li>Continuous evaluation and improvement of our practices.</li>
            </ul>
            <p>
            We commit ourselves to work ethically and responsible to guarantee a fair and appropriate payment to all possible workers or the piece of work of our company, in line with the principles of social justice and labor equity.
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
          <div className=" font-extrabold text-6xl text-violeta">ENVIRONMENTAL POLICY</div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            The Pharmaceutical Chemical Industry Sigma Corp., has established and implemented in its processes, an environmental management system based on the requirements of ISO 14001: 2015.
            </p>
            <p>
            Sigma Corp., leading industry in the development and manufacture of medicines, cosmetics, medical and nutraceutical devices, in the more than 40 years of work has been developing a deep understanding of the field and establishing a strong relationship with consumers.
            </p>
            <p>
            Our environmental policy defines the commitment to carry out our activity within sustainable development parameters, maintaining control and management of the environmental aspects that it produces, especially in those most significant. Likewise, it establishes a common framework for the definition of the objectives and the realization of the activities that contribute to the continuous improvement of the environmental management system.
            </p>
            <p>
           To meet these commitments and achieve the established objectives, Sigma Corp. has established the following fundamental principles:
            </p>
            <ul className='list-decimal ml-10 space-y-3'>
              <li>
             Ensure the protection of the environment, working in a respectful way, preventing pollution and minimizing the environmental effects produced as a consequence of the activity carried out by the industry.
              </li>
              
              <li>
              Ensure compliance with applicable environmental requirements and
                requirements voluntarily assumed by the industry.
              </li>
              
              <li>
              Maintain the sensitization and awareness of all our employees, promoting their formation of environmental respect and favoring active participation, including improvement suggestions proposed by them with the objective of promoting continuous improvement.
              </li>
              <li>
              Define concrete and measurable objectives and goals within an environmental management plan, being reviewable according to your consideration once a year through the Annual Environmental Report.
              </li>
              <li>
              Perform an annual periodic evaluation of the environmental aspects derived from the activity, for the purpose of maintenance and continuous improvement of the environmental management system.
              </li>
            </ul>
            <p>
            All those who make up Sigma Corp., assume these principles, and it is our responsibility to put them into practice.  </p>
              <p>Sigma Corp., drives environmental improvement and assigns the necessary resources to ensure the successful implementation of this environmental policy.</p>
            
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
          POLITICS AND COMMITMENT AGAINST DISCRIMINATION
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            In Sigma Corp. we believe in equal opportunities and commit ourselves to provide a fair, respectful and inclusive work environment. Therefore, we commit ourselves to:
            </p>
            
            <ul className='list-decimal ml-10 space-y-3'>
              <li>
              Do not discriminate against any employee or employment applicant for gender reasons, sexual orientation, age, race, color, religion, disability, ethnicity or any other category protected by applicable laws.
              </li>
              <li>
              Provide the training and resources necessary to promote an environment of inclusive and respectful work. Managers and supervisors will receive training on how to recognize and prevent discrimination, and all employees are expected to comply with this policy.
              </li>
              <li>
              Create and maintain a work environment that assesses diversity and inclusion, and that respects the rights and dignity of each employee.
              </li>
            </ul>
            <p>
            This non-discrimination policy is a reflection of our commitment to create a fair and equitable work environment for all.
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
          IMPLEMENTATION OF ETHICS, BEHAVIOR AND GOOD GOVERNANCE
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <p>
            The Manual of Ethics, Behavior and Good Governance, describes the responsibilities that employees have and senior management in compliance with the norms, laws and regulations of Sigma Corp. These rules of conduct apply to all employees and are an integral part withinof the employee's employment relationship.
            </p>
            <p>
           Sigma Corp. understands that the work environment can have a significant impact on the health and well-being of employees. A favorable work environment can improve the performance and motivation of employees, while an unfavorable work environment can generate stress, fatigue and work -related diseases. For this reason, the company strives to create a healthy, safe and productive environment for its employees. Which includes measures such as the improvement of the physical conditions of the work space, the promotion of healthy interpersonal relationships and the implementation of labor policies and practices that promote the well-being and job satisfaction of employees. Having satisfied employees is one of the priorities of the Human Resources Department, since, having happy employees, high performance and better results are achieved. When the employees are given importance they feel or think and value their contributions, in this way it is achieved that the work chain is strengthened and that the staff strives to the fullest to achieve the objectives of the organization.
            </p>
            

            <p>
            In Sigma Corp. lasting relationships are cultivated, since people, which are our resources, are our most valuable good. This faithfulness is the result of the incentive for the development of talents, the quality of life and the valuation of the equipment.With this objective, Sigma Corp. constantly promotes the qualification and personal and professional development of employees. These are leadership, behavior, technical, professional training programs, among other initiatives.
            </p>
            <p>
           In position promotions, employees participate in selections in which they are evaluated through clear and egalitarian criteria in the personnel qualification system.

            </p>
            <p>
           In Sigma Corp. there is a policy against labor exploitation.Any employee who remains working at extraordinary schedules will receive the corresponding payment for the overtime worked. Sigma Corp. does not employ or use minors.
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
          COMMITMENTS BETWEEN SIGMA CORP. AND ITS WORKERS
          </div>
          <div className="text-lg pl-6 text-gray-600 text-justify flex flex-col space-y-5 py-5">
            <strong>COMMITMENT OF THE INSTITUTION TOWARDS WORKERS:</strong>
            <ul className='list-disc ml-10 space-y-3'>
              <li>
              Promote work in fair and dignified conditions for all workers.
              </li>
              <li>
              Ensure the protection of privacy, honor, mental health and freedom of people at work.
              </li>
              <li>
              Promote a positive and harmonious work environment for everyone.
              </li>
              <li>
              Treat the Institution's workers without discrimination (based on race, religion, sexual preference or nationality).
              </li>
              <li>Respect and promote good relations among all, do not encourage work to be carried out.

              </li>
              <li>
              Keep employees informed about software updates, and any other necessary for institutional development.
              </li>
              <li>
              Timely pay salary, social benefits and aid as set forth in the law.
              </li>
              <li>
              Carry out activities of Labor Well-being.
              </li>
              <li>
              Use the established schedules and respect the rest schedule.
              </li>

            </ul>

            <strong>COMMITMENTS OF THE WORKERS TOWARDS THE INSTITUTION:</strong>
            <ul className='list-disc ml-10 space-y-3'>
              <li>
              Be prudent in the language and in the way of behaving during the exercise of functions.
              </li>
              <li>
              Maintain proper personal presentation during the workday.
              </li>
              <li>
              Be punctual when attending the commitments related to the position and in the established schedules.
              </li>
              <li>
              Respect the Internal Work Regulations.
              </li>
              <li>
              Carry out activities responsibly and under institutional values.
              </li>
              <li>
              Respect, reserve and save confidential information to which you have access.
               </li>
              <li>
              Keep in mind that the offices, information systems, work items and Internet use must be used only for the performance of functions.
              </li>
              <li>
              Do not disclose private information of the Institution to external entities or to employees whose position does not require its knowledge.
              </li>
              <li>
              Respond promptly and appropriately to phone calls or emails.
              </li>
              <li>
              Safeguard the information that is collected and timely process complaints related to workplace harassment.
              </li>
              <li>
              Do not install illegal software on the Institution's computers.
              </li>
            <li>
            Correctly use usernames and passwords, and maintain their confidentiality.
            </li>
            
              <li>
              Be dynamic and participatory in the activities carried out by the institution.
              </li>
              <li>
              Only store information owned by the Institution, on servers and personal computers.
              </li>
              <li>
              Responsibly use equipment, office items, files and records, only for the performance of their duties.
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
             
            Social responsibility news
       
         </div>
            <div className="flex justify-center mt-4 pb-10">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                SIGMA
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
              SOCIAL RESPONSABILITY
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
}

