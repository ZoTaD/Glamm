import React, { useState } from 'react';
import ServiceCard from './serviceCard'; 

type ServiceCategory = "cosmetologia" | "miradaPerfecta";

const services: Record<ServiceCategory, { title: string; image: string; description: string; masInfo: string; }[]> = {
  cosmetologia: [
    { title: "Dermaplanning", image: "/images/Dermaplanning.jpg", description: "Transforma tu piel con dermaplaning, logrando una textura suave y un tono uniforme desde la primera sesión.", masInfo: "El Dermaplanning es un tratamiento de exfoliación profunda que elimina células muertas y vello facial." },
    
    { title: "Tratamiento acné", image: "/images/tratamiento-limpieza-facial-acne-1200x800.jpg", description: "El Tratamiento para Acné está diseñado para controlar la producción de sebo y minimizar brotes.", masInfo: "Nuestro tratamiento para acné incluye limpieza facial profunda, extracción de comedones y aplicación de productos específicos." },

    { title: "Hiperpigmentaciones", image: "/images/microdermoabrasion-tratamiento.jpg", description: "Nuestro Tratamiento para Hiperpigmentaciones tiene como objetivo unificar el tono de la piel y reducir la apariencia de manchas.", masInfo: "El tratamiento incluye microdermoabrasión, peeling químico y aplicación de productos despigmentantes." }
  ],
  miradaPerfecta: [
    { title: "Lifting de Pestañas", image: "/images/lifting.png", description: "Levanta y realza tus pestañas naturales sin necesidad de extensiones.", masInfo: "El Lifting de Pestañas es un tratamiento que curva y alarga las pestañas naturales para un efecto de mayor longitud y volumen." },

    { title: "Laminado de Cejas", image: "/images/laminado.jpg", description: "Dale forma y estructura a tus cejas con un acabado natural y duradero.", masInfo: "El Laminado de Cejas es un tratamiento que fija y moldea las cejas para un efecto de mayor densidad y definición." },

    { title: "Extensiones de Pestañas", image: "/images/extension.jpg", description: "Aporta volumen y longitud a tus pestañas con un look natural o dramático.", masInfo: "Las Extensiones de Pestañas son fibras sintéticas que se adhieren a las pestañas naturales para un efecto de mayor longitud y volumen." }
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
