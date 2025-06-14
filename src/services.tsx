// src/services.tsx
import React, { useState } from 'react';
import ServiceCard from './serviceCard';
import { ArrowLeft } from 'lucide-react';

export type ServiceCategory = "cosmetologia" | "miradaPerfecta";

export type FAQItem = { q: string; a: string };

export interface Service {
  title: string;
  image: string;
  description: string;
  masInfo: string;
  faq: FAQItem[];
}

export const services: Record<ServiceCategory, Service[]> = {
  cosmetologia: [
    {
      title: "Dermaplanning",
      image: "/images/Dermaplanning.jpg",
      description: "Técnica de exfoliación mecánica que elimina células muertas y vello facial. Deja la piel más luminosa, suave desde la primer sesión y facilita la absorción de productos.",
      masInfo: "Se utiliza un bisturí específico de uso profesional de manera controlada por la capa superficial de la piel, retirando impurezas y vello fino. No genera dolor ni altera el crecimiento del vello.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Con una hoja descartable eliminamos células muertas y vello fino superficial. Esto mejora la textura de la piel, potencia la luminosidad y permite una mejor absorción de los productos que aplicamos."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Los resultados se mantienen por 3 a 4 semanas. Recomendamos una sesión mensual."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí, es un procedimiento seguro e indoloro. Algunas pieles pueden quedar un poco sensibles, pero sin efectos secundarios importantes."
        }
      ]
    },
    {
      title: "Tratamiento acné",
      image: "/images/tratamiento-limpieza-facial-acne-1200x800.jpg",
      description: "Ayuda a controlar el acné, reducir la inflamación y prevenir marcas. Regula la producción de sebo y mejora la textura de la piel.",
      masInfo: "Se utilizan activos como ácido salicílico, niacinamida y peróxido de benzoilo, dependiendo del tipo de piel y grado de acné. El tratamiento incluye limpieza profunda, exfoliación y aplicación de productos específicos para calmar la piel y evitar nuevas lesiones.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Adaptamos el tratamiento según el tipo de acné: limpiezas profundas, peelings suaves y activos calmantes, seborreguladores y regeneradores, sin agresiones."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Los resultados se ven con constancia. Las sesiones pueden ser cada 15 o 30 días, dependiendo del caso y evolución."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí. Puede haber leve descamación o sensibilidad si se usan ácidos, pero siempre bajo control y supervisión."
        }
      ]
    },
    {
      title: "Hiperpigmentaciones",
      image: "/images/microdermoabrasion-tratamiento.jpg",
      description: "Nuestro Tratamiento para Hiperpigmentaciones tiene como objetivo unificar el tono de la piel y reducir la apariencia de manchas.",
      masInfo: "El tratamiento incluye microdermoabrasión, peeling químico y aplicación de productos despigmentantes.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Realizamos microdermoabrasión seguida de peeling químico y aplicación de productos despigmentantes adaptados a tu piel."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Para mantener la reducción de manchas, se recomienda una sesión cada 4 a 6 semanas."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí, es seguro. Puede haber leve enrojecimiento temporal que desaparece rápidamente."
        }
      ]
    },
    {
      title: "Limpieza Profunda",
      image: "/images/limpiezaProfunda.webp",
      description: "Tratamiento ideal para eliminar impurezas, puntos negros y células muertas. Ayuda a equilibrar la piel, dejándola fresca, suave e hidratada.",
      masInfo: "Se realiza una exfoliación para remover células muertas, extracción de comedones, punta de diamante para eliminar impurezas, un sérum específico y una hidratación profunda para restaurar la piel y mejorar su textura.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Comenzamos con una evaluación de tu piel, luego limpieza con productos específicos, exfoliación suave, extracción, descongestión y aplicación de activos calmantes."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Desde la primera sesión notarás la piel más limpia y equilibrada. Lo ideal es repetir cada 30 a 45 días."
        },
        {
          q: "¿Es segura? ¿Tiene efectos secundarios?",
          a: "Sí, es un tratamiento seguro y no invasivo. Puede haber leve enrojecimiento post limpieza, pero desaparece rápido."
        }
      ]
    },
    {
      title: "Tratamiento de Envejecimiento Cutáneo",
      image: "/images/envejecimiento.jpg",
      description: "Disminuye arrugas, mejora la firmeza y estimula la producción de colágeno para una piel más joven y luminosa.",
      masInfo: "Se emplean técnicas como peelings, masajes faciales y activos como ácido hialurónico y máscaras tensoras de colágeno. Estos trabajan en la regeneración celular, hidratación profunda y mejora de la elasticidad de la piel.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Trabajamos con técnicas manuales lifting, activos antioxidantes y colágeno liposomado para mayor firmeza y elasticidad."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "La piel se ve más viva desde la primera sesión. Recomendamos sesiones mensuales para mantener resultados."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí. Puede haber ligero enrojecimiento temporal, parte normal del proceso de estimulación."
        }
      ]
    },
    {
      title: "Limpieza Premium",
      image: "/images/premium.png",
      description: "La limpieza facial más completa para exfoliar, purificar e hidratar en profundidad, adaptada a cada tipo de piel.",
      masInfo: "Incluye limpieza profunda, dermaplanning y tratamientos específicos según tu diagnóstico. Finaliza con mascarillas y activos personalizados para una piel renovada.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Combinamos los pasos de todos los tratamientos necesarios: limpieza profunda, dermaplanning y peeling químico según tu piel."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Los efectos se ven desde la primera sesión. Recomendamos repetir cada 30 a 45 días."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí, es seguro y adaptado a tu tipo de piel. Puede haber leve enrojecimiento post extracción."
        }
      ]
    }
  ],
  miradaPerfecta: [
    {
      title: "Lifting Botox",
      image: "/images/lifting.png",
      description: "Técnica que realza la curvatura natural de las pestañas, logrando una mirada más abierta y expresiva.",
      masInfo: "Se aplican productos que levantan las pestañas desde la raíz, con queratina y péptidos para fortalecerlas. El efecto dura entre 4 y 8 semanas.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Curvamos y elevamos tus pestañas naturales desde la raíz, aplicando una fórmula nutritiva para estimular su crecimiento."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "El efecto dura entre 6 y 8 semanas. Mantén pestañas sin maquillaje ni agua 48hs post-tratamiento."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí. Puede haber ligera irritación en ojos muy sensibles, pero es raro."
        }
      ]
    },
    {
      title: "Diseño y Perfilado de Cejas",
      image: "/images/laminado.jpg",
      description: "Peinado semipermanente que da volumen, orden y fijación a las cejas para un efecto prolijo y definido.",
      masInfo: "Utilizamos productos específicos para reestructurar y fijar el vello sin tracción, respetando la piel del contorno de ojos.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Aplicamos técnica sin pinza ni cera, peinando y fijando cada pelo para un acabado natural y saludable."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "El efecto dura de 2 a 4 semanas. Retoques suaves según crecimiento de vello."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí, es totalmente seguro. No genera enrojecimiento ni irritación significativa."
        }
      ]
    },
    {
      title: "Laminado de Cejas",
      image: "/images/extension.jpg",
      description: "Aporta volumen y longitud a tus cejas con un look natural o dramático.",
      masInfo: "Reorganizamos los vellos para peinarlos y fijarlos, logrando mayor definición y plenitud.",
      faq: [
        {
          q: "¿Cómo es el procedimiento?",
          a: "Aplicamos solución moldeadora para reacomodar y fijar los vellos en la posición deseada."
        },
        {
          q: "¿Cuánto duran los resultados y requiere mantenimiento?",
          a: "Dura entre 4 y 6 semanas. Se puede combinar con perfilado para un acabado más pulido."
        },
        {
          q: "¿Es seguro? ¿Tiene efectos secundarios?",
          a: "Sí. Usamos productos seguros para esta zona. En pieles muy sensibles puede aparecer leve irritación."
        }
      ]
    }
  ]
};

const CategoryCard: React.FC<{
  title: string;
  image: string;
  description: string;
  onClick: () => void;
}> = ({ title, image, description, onClick }) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden group cursor-pointer rounded-lg shadow-lg" onClick={onClick}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-8 z-10">
        <div>
          <h3 className="text-white text-3xl font-heading font-bold mb-4">
            {title}
          </h3>
          <p className="text-white/90 text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <button className="self-start border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-300">
          VER SERVICIOS
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const categories = [
    {
      key: 'cosmetologia' as ServiceCategory,
      title: 'Cosmetología & Cosmiatría',
      image: '/images/Dermaplanning.jpg', // Puedes cambiar por una imagen específica
      description: 'Tratamientos faciales especializados para el cuidado integral de tu piel. Desde limpiezas profundas hasta tratamientos anti-edad.'
    },
    {
      key: 'miradaPerfecta' as ServiceCategory,
      title: 'Mirada Perfecta',
      image: '/images/lifting.png', // Puedes cambiar por una imagen específica
      description: 'Servicios especializados para realzar tu mirada. Lifting de pestañas y tratamientos para cejas que enmarcan tu belleza natural.'
    }
  ];

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category);
  };

  const handleGoBack = () => {
    setSelectedCategory(null);
  };

  const getCategoryTitle = (category: ServiceCategory) => {
    const cat = categories.find(c => c.key === category);
    return cat ? cat.title : '';
  };

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {!selectedCategory ? (

          <>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <span className="block w-24 h-1 bg-gray-900 rounded-full mx-auto" />
              <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                Descubre nuestras especialidades diseñadas para realzar tu belleza natural
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {categories.map((category) => (
                <CategoryCard
                  key={category.key}
                  title={category.title}
                  image={category.image}
                  description={category.description}
                  onClick={() => handleCategorySelect(category.key)}
                />
              ))}
            </div>
          </>
        ) : (
         
          <>
            <div className="mb-8">
              <button
                onClick={handleGoBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
              >
                <ArrowLeft className="h-5 w-5" />
                Volver a servicios
              </button>

              <div className="text-center mb-12">
                <h2 className="text-5xl font-heading font-bold text-gray-900 mb-4">
                  {getCategoryTitle(selectedCategory)}
                </h2>
                <span className="block w-24 h-1 bg-gray-900 rounded-full mx-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services[selectedCategory].map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;