import React, { useState } from 'react';
import ServiceCard from './serviceCard';

type ServiceCategory = "cosmetologia" | "miradaPerfecta";

const services: Record<ServiceCategory, { title: string; image: string; description: string; masInfo: string; }[]> = {
  cosmetologia: [
    {
      title: "Dermaplanning",
      image: "/images/Dermaplanning.jpg",
      description: "Técnica de exfoliación mecánica  que elimina células muertas y vello facial. Deja la piel más luminosa, suave desde la primer sesión y facilita la absorción de productos.", masInfo: "Se utiliza un bisturí específico de uso profesional de manera controlada por la capa superficial de la piel, retirando impurezas y vello fino. No genera dolor ni altera el crecimiento del vello."
    },

    {
      title: "Tratamiento acné",
      image: "/images/tratamiento-limpieza-facial-acne-1200x800.jpg",
      description: "Ayuda a controlar el acné, reducir la inflamación y prevenir marcas. Regula la producción de sebo y mejora la textura de la piel.  Ayuda a controlar el acné, reducir la inflamación y prevenir marcas. Regula la producción de sebo y mejora la textura de la piel.", masInfo: "Se utilizan activos como ácido salicílico, niacinamida y peróxido de benzoilo, dependiendo del tipo de piel y grado de acné. El tratamiento incluye limpieza profunda, exfoliación y aplicación de productos específicos para calmar la piel y evitar nuevas lesiones."
    },

    {
      title: "Hiperpigmentaciones",
      image: "/images/microdermoabrasion-tratamiento.jpg",
      description: "Nuestro Tratamiento para Hiperpigmentaciones tiene como objetivo unificar el tono de la piel y reducir la apariencia de manchas.",
      masInfo: "El tratamiento incluye microdermoabrasión, peeling químico y aplicación de productos despigmentantes."
    },

    {
      title: "Limpieza Profunda",
      image: "/images/limpiezaProfunda.webp",
      description: "Tratamiento ideal para eliminar impurezas, puntos negros y células muertas. Ayuda a equilibrar la piel, dejándola fresca, suave e hidratada.",
      masInfo: "Se realiza una exfoliación para remover células muertas, extracción de comedones, punta de diamante para eliminar impurezas, un sérum específico y una hidratación profunda para restaurar la piel y mejorar su textura."
    },

    {
      title: "Tratamiento de Envejecimiento Cutáneo",
      image: "/images/envejecimiento.jpg",
      description: "Disminuye arrugas, mejora la firmeza y estimula la producción de colágeno para una piel más joven y luminosa.",
      masInfo: "Se emplean técnicas como peelings, masajes faciales y activos como ácido hialurónico y máscaras tensoras de colageno. Estos trabajan en la regeneración celular, hidratación profunda y mejora de la elasticidad de la piel. "
    },

    // { title: "Tratamiento para Rosácea", image: "/images/tratamiento-limpieza-facial-acne-1200x800.jpg", description: "Ayuda a calmar la piel sensible, reducir la rojez y fortalecer la barrera cutánea, evitando reacciones e irritaciones.", masInfo: "Se aplican activos como centella asiática y ácido azelaico, junto con técnicas que reducen la sensibilidad. Se trabaja en la hidratación y protección de la piel para evitar brotes y mejorar su resistencia a factores externos." },

    {
      title: "Limpieza Premium",
      image: "/images/premium.png",
      description: "La limpieza facial más completa para exfoliar, purificar e hidratar en profundidad, adaptada a cada tipo de piel.",
      masInfo: "Incluye los pasos de la limpieza profunda junto con dermaplanning y tratamientos específicos según la necesidad de la piel. Se finaliza con mascarillas y activos personalizados para lograr una piel renovada y saludable."
    },
  ],
  miradaPerfecta: [
    {
      title: "Lifting Botox",
      image: "/images/lifting.png",
      description: "Técnica que realza la curvatura natural de las pestañas, logrando una mirada más abierta y expresiva sin necesidad de extensiones.",
      masInfo: "Se aplican productos que levantan las pestañas desde la raíz, seguidos de un sérum nutritivo con queratina y péptidos para fortalecerlas. El efecto dura entre 4 y 8 semanas."
    },

    {
      title: "Diseño y Perfilado de Cejas",
      image: "/images/laminado.jpg",
      description: "Peinado semipermanente que da volumen, orden y fijación a las cejas, logrando un efecto prolijo y definido.",
      masInfo: "Se aplican productos específicos para reestructurar el vello de las cejas y fijarlas en la posición deseada. Ideal para cejas rebeldes o con poco volumen. Su efecto dura aproximadamente de 2 a 6 semanas."
    },

    {
      title: "Laminado de Cejas",
      image: "/images/extension.jpg",
      description: "Aporta volumen y longitud a tus pestañas con un look natural o dramático.", masInfo: "Las Extensiones de Pestañas son fibras sintéticas que se adhieren a las pestañas naturales para un efecto de mayor longitud y volumen."
    }
  ]
};

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("cosmetologia");
  const selectedServices = services[activeCategory];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>

        {/* Botones de selección */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full ${activeCategory === "cosmetologia" ? "bg-black text-white" : "bg-gray-300 text-black"}`}
            onClick={() => setActiveCategory("cosmetologia")}
          >
            Cosmetología y Cosmiatría
          </button>
          <button
            className={`px-6 py-2 rounded-full ${activeCategory === "miradaPerfecta" ? "bg-black text-white" : "bg-gray-300 text-black"}`}
            onClick={() => setActiveCategory("miradaPerfecta")}
          >
            Mirada Perfecta
          </button>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid md:grid-cols-3 gap-8">
          {selectedServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
